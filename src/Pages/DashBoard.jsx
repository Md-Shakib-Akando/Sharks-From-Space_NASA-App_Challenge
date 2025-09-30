import React, { useState, useEffect, useRef } from 'react';
import { Activity, Waves, Satellite, MapPin } from 'lucide-react';

const DashBoard = () => {
    const [layers, setLayers] = useState({
        chlorophyll: true,
        phytoplankton: false,

        ssh: false,
        hotspots: true,

    });

    const mapRef = useRef(null);
    const leafletMapRef = useRef(null);
    const layersRef = useRef({});
    const chartsRef = useRef({});


    const [paceData, setPaceData] = useState([]);
    const [swotData, setSwotData] = useState([]);

    useEffect(() => {
        // PACE API call
        fetch('https://backend-nasa-space-app-challenge-2.onrender.com/pace-data')
            .then(res => res.json())
            .then(rawData => {
                const formattedData = rawData.lat.map((lat, i) => ({
                    lat: lat,
                    lng: rawData.lon[i],
                    chlorophyll: rawData.chlor_a[i],
                    phytoplankton: rawData.phytoplankton[i],
                    sst: rawData.sst[i]
                }));
                setPaceData(formattedData);
            })
            .catch(err => console.error('PACE API error:', err));

        // SWOT API call
        fetch('https://backend-nasa-space-app-challenge-2.onrender.com/swot-data')
            .then(res => res.json())
            .then(data => {
                if (data && Array.isArray(data.lat) && Array.isArray(data.lon)) {
                    const minLen = Math.min(
                        data.lat.length,
                        data.lon.length,
                        data.ssh?.length || Infinity,
                        data.eddyStrength?.length || Infinity,
                        data.currentSpeed?.length || Infinity
                    );

                    const formattedSwotData = [];
                    for (let i = 0; i < minLen; i++) {
                        formattedSwotData.push({
                            lat: data.lat[i],
                            lng: data.lon[i],
                            ssh: data.ssh?.[i] ?? 0,
                            eddyStrength: data.eddyStrength?.[i] ?? 0,
                            currentSpeed: data.currentSpeed?.[i] ?? 0
                        });
                    }
                    setSwotData(formattedSwotData);
                } else {
                    console.error('SWOT Data format invalid:', data);
                }
            })
            .catch(err => console.error('SWOT API error:', err));
    }, []);

    const calculateSharkProbability = (chlorophyll, phytoplankton, eddyStrength, currentSpeed, sst, ssh) => {

        if (sst < 15 || sst > 28) return 0;


        const probability = (
            chlorophyll * 0.4 +
            phytoplankton * 0.35 +
            eddyStrength * 0.15 +
            ssh * 0.1
        );
        return Math.min(probability, 1.0);
    };


    const sharkHotspots = paceData.map(pacePoint => {
        // swotPoint কে lat-lng অনুযায়ী match করো
        const swotPoint = swotData.find(s => s.lat === pacePoint.lat && s.lng === pacePoint.lng) || {};

        const probability = calculateSharkProbability(
            pacePoint.chlorophyll,
            pacePoint.phytoplankton,
            swotPoint.eddyStrength ?? 0,
            swotPoint.currentSpeed ?? 0,
            pacePoint.sst,
            swotPoint.ssh ?? 0
        );

        return {
            ...pacePoint,
            ...swotPoint,
            probability
        };
    }).filter(h => h.probability > 0.3);


    // Initialize map
    useEffect(() => {
        if (!mapRef.current || leafletMapRef.current) return;

        const loadLeaflet = async () => {
            if (!window.L) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
                document.head.appendChild(link);

                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
                script.async = true;
                script.onload = initializeMap;
                document.body.appendChild(script);
            } else initializeMap();
        };

        const initializeMap = () => {
            const L = window.L;
            const map = L.map(mapRef.current, {
                center: [20, 0],
                zoom: 2,
                zoomControl: true,
                attributionControl: true,
                worldCopyJump: false,
                inertia: false
            });

            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Esri, GEBCO, NOAA',
                maxZoom: 18
            }).addTo(map);

            leafletMapRef.current = map;

            layersRef.current = {
                chlorophyll: L.layerGroup().addTo(map),
                phytoplankton: L.layerGroup().addTo(map),


                ssh: L.layerGroup(),
                hotspots: L.layerGroup().addTo(map),

            };

            addMapLayers(L, map);
            map.setView([20, 0], 2, { animate: false });
            initializeCharts();
        };

        loadLeaflet();

        return () => {
            if (leafletMapRef.current) {
                leafletMapRef.current.remove();
                leafletMapRef.current = null;
            }
        };
    }, [paceData, swotData]);




    const addMapLayers = (L, map) => {
        Object.values(layersRef.current).forEach(layerGroup => layerGroup.clearLayers());

        paceData.forEach(point => {
            const circle = L.circle([point.lat, point.lng], {
                color: '#44ff44',
                fillColor: '#44ff44',
                fillOpacity: point.chlorophyll * 0.5,
                radius: point.chlorophyll * 50000
            });

            circle.bindPopup(`
                <b>PACE Chlorophyll Data</b><br>
                Chlorophyll: ${point.chlorophyll} mg/m³<br>
                Phytoplankton: ${point.phytoplankton} density<br>
                SST: ${point.sst}<br>
                Location: ${point.lat.toFixed(2)}, ${point.lng.toFixed(2)}
            `);

            layersRef.current.chlorophyll.addLayer(circle);
        });
        // Phytoplankton layer
        paceData.forEach(point => {
            const circle = L.circle([point.lat, point.lng], {
                color: '#00ffcc',
                fillColor: '#00ffcc',
                fillOpacity: point.phytoplankton * 0.5,
                radius: point.phytoplankton * 40000
            });

            circle.bindPopup(`
        <b>PACE Phytoplankton Data</b><br>
        Phytoplankton: ${point.phytoplankton}<br>
        Chlorophyll: ${point.chlorophyll} mg/m³<br>
        SST: ${point.sst}<br>
        Location: ${point.lat.toFixed(2)}, ${point.lng.toFixed(2)}
    `);

            layersRef.current.phytoplankton.addLayer(circle);
        });


        swotData.forEach(point => {
            const circle = L.circle([point.lat, point.lng], {
                color: '#ff00ff',
                fillColor: '#ff00ff',
                fillOpacity: 0.3,
                radius: (point.ssh || 0.1) * 50000
            });

            circle.bindPopup(`
        <b>SWOT Sea Surface Height</b><br>
        SSH: ${point.ssh} m<br>
        Eddy Strength: ${point.eddyStrength}<br>
        Current Speed: ${point.currentSpeed} m/s
    `);

            layersRef.current.ssh.addLayer(circle);
        });

        sharkHotspots.forEach(hotspot => {
            const color = hotspot.probability > 0.7 ? '#ff4444' :
                hotspot.probability > 0.5 ? '#ffaa00' : '#ffff44';

            const marker = L.circleMarker([hotspot.lat, hotspot.lng], {
                color: color,
                fillColor: color,
                fillOpacity: 0.7,
                radius: 8 + (hotspot.probability * 10)
            });

            marker.bindPopup(`
                <b>🦈 Shark Foraging Prediction</b><br>
                Probability: ${(hotspot.probability * 100).toFixed(1)}%<br>
                Chlorophyll: ${hotspot.chlorophyll} mg/m³<br>
                Eddy Strength: ${hotspot.eddyStrength}<br>
                SST: ${hotspot.sst}<br>
                <i>Based on NASA PACE & SWOT data</i>
            `);

            layersRef.current.hotspots.addLayer(marker);
        });
    };

    const initializeCharts = () => {
        if (window.Chart) createCharts();
        else {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js';
            script.async = true;
            script.onload = createCharts;
            document.body.appendChild(script);
        }
    };

    const createCharts = () => {
        const Chart = window.Chart;

        const correlationCtx = document.getElementById('correlationChart');
        if (correlationCtx) {
            // Destroy existing chart if it exists
            if (chartsRef.current.correlation) {
                chartsRef.current.correlation.destroy();
            }

            chartsRef.current.correlation = new Chart(correlationCtx.getContext('2d'), {
                type: 'scatter',
                data: {
                    datasets: [
                        {
                            label: 'Chlorophyll vs Shark Probability',
                            data: sharkHotspots.map(h => ({ x: h.chlorophyll, y: h.probability })),
                            backgroundColor: '#00d4ff',
                            borderColor: '#00d4ff'
                        },
                        {
                            label: 'Phytoplankton vs Shark Probability',
                            data: sharkHotspots.map(h => ({ x: h.phytoplankton, y: h.probability })),
                            backgroundColor: '#ff6b6b',
                            borderColor: '#ff6b6b'
                        }
                    ]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });
        }

        const timeSeriesCtx = document.getElementById('timeSeriesChart');
        if (timeSeriesCtx) {
            if (chartsRef.current.timeSeries) {
                chartsRef.current.timeSeries.destroy();
            }

            const timeLabels = [], confidenceData = [];
            const now = new Date();
            for (let i = 23; i >= 0; i--) {
                const date = new Date(now - i * 60 * 60 * 1000);
                timeLabels.push(date.getHours() + ':00');
                confidenceData.push(Math.random() * 0.4 + 0.6);
            }

            chartsRef.current.timeSeries = new Chart(timeSeriesCtx.getContext('2d'), {
                type: 'line',
                data: { labels: timeLabels, datasets: [{ label: 'Model Confidence', data: confidenceData, borderColor: '#00d4ff', backgroundColor: 'rgba(0, 212, 255, 0.1)', fill: true }] },
                options: { responsive: true, maintainAspectRatio: false }
            });
        }
    };


    useEffect(() => {
        if (!leafletMapRef.current || !layersRef.current.chlorophyll) return;

        Object.keys(layers).forEach(layerName => {
            const layer = layersRef.current[layerName];
            if (layers[layerName]) leafletMapRef.current.addLayer(layer);
            else leafletMapRef.current.removeLayer(layer);
        });
    }, [layers]);

    const toggleLayer = (layerName) => setLayers(prev => ({ ...prev, [layerName]: !prev[layerName] }));

    return (
        <div className="min-h-screen bg-[#02182F] text-white">
            <div className="max-w-11/12 mx-auto p-5">
                {/* Header */}
                <div className="text-center mb-8 ">
                    <h1 className="text-5xl font-bold mb-3 text-cyan-500 ">
                        🦈 Shark Foraging Prediction Dashboard
                    </h1>

                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
                    {/* Map Container */}
                    <div className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden" style={{ height: '600px' }}>
                        <div ref={mapRef} style={{ height: '100%', width: '100%' }} />

                        {/* Map Legend */}
                        <div className="absolute top-3 right-3 bg-black/70 p-3 rounded-lg z-[1000]">
                            <div className="flex items-center mb-2 text-sm">
                                <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                                <span>High Shark Probability</span>
                            </div>
                            <div className="flex items-center mb-2 text-sm">
                                <div className="w-4 h-4 rounded-full bg-orange-500 mr-2"></div>
                                <span>Medium Probability</span>
                            </div>
                            <div className="flex items-center mb-2 text-sm">
                                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                                <span>High Chlorophyll</span>
                            </div>

                        </div>
                    </div>

                    {/* Controls Panel */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 overflow-y-auto" style={{ maxHeight: '600px' }}>
                        {/* PACE Data */}
                        <div className="mb-6">
                            <h3 className="text-cyan-400 text-xl font-semibold mb-4 flex items-center">
                                <Satellite className="mr-2" size={20} />
                                PACE Satellite Data
                            </h3>
                            <ToggleSwitch label="Chlorophyll Concentration" checked={layers.chlorophyll} onChange={() => toggleLayer('chlorophyll')} />
                            <ToggleSwitch label="Phytoplankton Density" checked={layers.phytoplankton} onChange={() => toggleLayer('phytoplankton')} />
                        </div>

                        {/* SWOT Data */}
                        <div className="mb-6">
                            <h3 className="text-cyan-400 text-xl font-semibold mb-4 flex items-center">
                                <Waves className="mr-2" size={20} />
                                SWOT Satellite Data
                            </h3>

                            <ToggleSwitch label="Sea Surface Height" checked={layers.ssh} onChange={() => toggleLayer('ssh')} />
                        </div>

                        {/* Predictions */}
                        <div className="mb-6">
                            <h3 className="text-cyan-400 text-xl font-semibold mb-4 flex items-center">
                                <MapPin className="mr-2" size={20} />
                                Predictions
                            </h3>
                            <ToggleSwitch label="Shark Hotspots" checked={layers.hotspots} onChange={() => toggleLayer('hotspots')} />

                        </div>

                        {/* Data Status */}
                        <div>
                            <h3 className="text-cyan-400 text-xl font-semibold mb-4 flex items-center">
                                <Activity className="mr-2" size={20} />
                                Data Status
                            </h3>
                            <div className="space-y-2 text-sm">
                                <StatusIndicator label="PACE" active />
                                <StatusIndicator label="SWOT" active />
                                <StatusIndicator label="Model" active />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20" style={{ height: '300px' }}>
                        <h3 className="text-cyan-400 text-center text-lg font-semibold mb-4">
                            Ocean Variables vs Shark Presence
                        </h3>
                        <canvas id="correlationChart"></canvas>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20" style={{ height: '300px' }}>
                        <h3 className="text-cyan-400 text-center text-lg font-semibold mb-4">
                            Temporal Prediction Confidence
                        </h3>
                        <canvas id="timeSeriesChart"></canvas>
                    </div>
                </div>

                {/* Tag Visualization */}

            </div>
        </div>
    );
};

// Toggle Switch Component
const ToggleSwitch = ({ label, checked, onChange }) => (
    <div className="flex items-center justify-between py-2">
        <label className="text-cyan-50 text-sm">{label}</label>
        <button
            onClick={onChange}
            className={`relative w-12 h-6 rounded-full transition-colors ${checked ? 'bg-cyan-400' : 'bg-gray-400'
                }`}
        >
            <div
                className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${checked ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
            />
        </button>
    </div>
);

// Status Indicator Component
const StatusIndicator = ({ label, active }) => (
    <div className="flex items-center">
        <div className={`w-3 h-3 rounded-full mr-3 ${active ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
        <span>{label}: {active ? 'Active' : 'Inactive'}</span>
    </div>
);

// Shark Tag Component
const SharkTag = ({ id, depth, temp }) => (
    <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 px-6 py-4 rounded-full text-white font-bold shadow-lg animate-pulse">
        🦈 TAG-{id} | GPS: Active | Depth: {depth} | Temp: {temp}
    </div>
);

export default DashBoard;