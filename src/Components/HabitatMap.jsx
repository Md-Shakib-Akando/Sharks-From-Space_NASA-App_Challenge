import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const HabitatMap = () => {
    const [hotspots, setHotspots] = useState([]);
    const [animationStep, setAnimationStep] = useState(0);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/risk-map")
            .then((res) => res.json())
            .then((data) => {
                const arr = [];
                let { time, lat, lon, mp_concentration, num_mp_samples, stddev_mp_samples } = data;

                // শুধু প্রথম time slice নাও
                time = time.slice(0, 1);
                mp_concentration = mp_concentration.slice(0, 1);
                num_mp_samples = num_mp_samples.slice(0, 1);
                stddev_mp_samples = stddev_mp_samples.slice(0, 1);

                for (let t = 0; t < time.length; t++) {
                    for (let i = 0; i < lat.length; i++) {
                        for (let j = 0; j < lon.length; j++) {
                            const conc = mp_concentration[t][i][j];
                            const samples = num_mp_samples[t][i][j];
                            const stddev = stddev_mp_samples[t][i][j];
                            if (conc != null && !isNaN(conc) && samples != null && !isNaN(samples)) {
                                arr.push({
                                    time: time[t],
                                    lat: lat[i],
                                    lon: lon[j],
                                    concentration: conc,
                                    samples: samples,
                                    stddev: stddev,
                                });
                            }
                        }
                    }
                }

                // random 100 points
                const shuffled = [...arr].sort(() => 0.5 - Math.random()).slice(0, 100);
                setHotspots(shuffled);
            })
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationStep((prev) => (prev + 1) % 20);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    const getColor = (conc) => {
        if (conc < 12000) return "#1E90FF";  // blue
        if (conc < 12400) return "#00FA9A";  // green
        if (conc < 12600) return "#FFD700";  // yellow
        return "#FF4500";                     // red
    };

    return (
        <MapContainer
            center={[-15, 130]}
            zoom={4}
            minZoom={1}
            scrollWheelZoom={true}
            className="h-[700px] rounded-2xl"
            maxBounds={[
                [-90, -580],
                [90, 580],
            ]}
            maxBoundsViscosity={0.8}
        >
            <TileLayer
                attribution="&copy; Esri Ocean"
                url="https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}"
            />
            <TileLayer
                attribution="&copy; Esri — World Ocean Reference"
                url="https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}"
                noWrap={false}
            />

            {hotspots.map((h, i) => {
                const baseRadius = h.samples * 200;
                const radius = Math.max(
                    baseRadius * (0.8 + 0.2 * Math.sin((animationStep / 20) * Math.PI * 2)),
                    5000
                );
                const color = getColor(h.concentration);

                return (
                    <Circle
                        key={i}
                        center={[h.lat, h.lon]}
                        radius={radius}
                        pathOptions={{
                            color: "#ffffff",
                            weight: 1,
                            fillColor: color,
                            fillOpacity: 0.8,
                        }}
                    >
                        <Popup>
                            Time: {h.time} <br />
                            Lat: {h.lat.toFixed(2)} <br />
                            Lon: {h.lon.toFixed(2)} <br />
                            MP Conc: {h.concentration.toFixed(2)} <br />
                            Samples: {h.samples} <br />
                            StdDev: {h.stddev?.toFixed(2)}
                        </Popup>
                    </Circle>
                );
            })}
        </MapContainer>
    );
};

export default HabitatMap;
