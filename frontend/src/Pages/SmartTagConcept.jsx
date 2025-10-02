import React, { useState } from 'react';
import { Waves, Satellite, Radio, Activity, MapPin, Shield, Zap, Target, Thermometer, Navigation, ArrowLeft } from 'lucide-react';
import overViewImage from '../assets/overview.png';
import deviceImage from '../assets/deviceImg.png';
import modelImage from '../assets/deviceModel.png';
import tesTingImage from '../assets/testingImg.png';
import { Link } from 'react-router';


const SmartTagConcept = () => {
    const [activeSection, setActiveSection] = useState('overview');

    const sections = [
        { id: 'overview', label: 'Overview', icon: Target },
        { id: 'workflow', label: 'Workflow', icon: Activity },
        { id: 'technology', label: 'Technology', icon: Zap }
    ];
    const deviceFeatures = [
        { icon: Navigation, title: "GPS Tracking", description: "High-precision location monitoring" },
        { icon: Activity, title: "Accelerometer", description: "Movement and behavior analysis" },
        { icon: Thermometer, title: "Temperature Sensors", description: "Environmental data collection" },
        { icon: Radio, title: "Satellite Uplink", description: "Real-time data transmission" }
    ];

    return (
        <div className="min-h-screen bg-[#031A2E] text-white">
            <Link
                to="/"
                className="mx-2 md:mx-6 mt-6 inline-flex items-center gap-2 px-2 py-2 rounded-lg 
                               bg-gradient-to-r from-cyan-500 to-blue-500 
                               text-white font-semibold shadow-lg 
                               hover:cursor-pointer "
            >
                <ArrowLeft className="w-5 h-5" />

            </Link>
            {/* Hero Section */}
            <div className="relative overflow-hidden">


                <div className="w-11/12 mx-auto px-6 py-16 relative z-10">
                    <div className="text-center mb-12">

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Stellar Sharks
                        </h1>

                    </div>

                    {/* Navigation Pills */}
                    <div className="flex justify-center gap-4 mb-12 flex-wrap">
                        {sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeSection === section.id
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                                        : 'bg-white/10 text-cyan-300 hover:bg-white/20'
                                        }`}
                                >
                                    <Icon size={20} />
                                    {section.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-11/12 mx-auto px-6 pb-16">
                {/* Overview Section */}
                {activeSection === 'overview' && (
                    <div className="space-y-12 animate-fade-in">
                        {/* Mission Statement */}
                        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/30 shadow-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <Shield className="text-cyan-400" size={32} />
                                <h2 className="text-3xl font-bold text-cyan-400">Our Mission</h2>
                            </div>
                            <p className="text-lg text-justify text-gray-200 leading-relaxed">
                                StellarSharks is an innovative project designed to safeguard shark populations by creating a real-time tracking and prediction system. Utilizing the Aqua-Tracker, a smart tag attached to sharks, we gather vital data on their movement, environment, and foraging activities. This information is then integrated with NASA satellite data on the "SharkNet" platform, allowing us to identify and predict crucial shark foraging hotspots, empowering conservation efforts and educating the public.

                            </p>
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
                                The Aqua-Tracker Device
                            </h2>
                        </div>
                        {/* Image Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                            <div className="group relative bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-3xl overflow-hidden border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 shadow-xl hover:shadow-pink-500/50">
                                <div className="aspect-video bg-gradient-to-br from-pink-900/50 to-orange-900/50 flex items-center justify-center">
                                    <div className="text-center">
                                        <img
                                            src={overViewImage}
                                            alt=""
                                            className="w-full "
                                        />
                                        <p className="text-pink-300 font-semibold text-xl">Complete System</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <p className="p-6 text-white">Full SharkNet ecosystem with satellite integration</p>
                                </div>
                            </div>
                            {/* Device Image */}
                            <div className="group relative bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl overflow-hidden border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 shadow-xl hover:shadow-cyan-500/50">
                                <div className="aspect-video bg-gradient-to-br from-cyan-900/50 to-blue-900/50 flex items-center justify-center">
                                    <div className="text-center">
                                        <img src={deviceImage} className='w-full' alt="" />
                                        <p className="text-cyan-300 font-semibold text-xl">Aqua-Tracker Device</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <p className="p-6 text-white">Smart tag device with GPS, sensors, and satellite communication</p>
                                </div>
                            </div>

                            {/* Device Model */}
                            <div className="group relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl overflow-hidden border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 shadow-xl hover:shadow-blue-500/50">
                                <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
                                    <div className="text-center">
                                        <img src={modelImage} alt="3D Device Model" />
                                        <p className="text-blue-300 font-semibold text-xl">3D Device Model</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <p className="p-6 text-white">Technical design and sensor placement visualization</p>
                                </div>
                            </div>

                            {/* Build Image */}
                            <div className="group relative bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-3xl overflow-hidden border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 shadow-xl hover:shadow-green-500/50">
                                <div className="aspect-video bg-gradient-to-br from-cyan-900/50 to-green-900/50 flex items-center justify-center">
                                    <div className="text-center">
                                        <img src={tesTingImage} alt="Build Process" className='w-full ' />
                                        <p className="text-green-300 font-semibold text-xl">Build Process</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <p className="p-6 text-white">Assembly and testing of the Aqua-Tracker system</p>
                                </div>
                            </div>

                            {/* Overall System */}

                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {deviceFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-card/60 backdrop-blur-md rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                                >
                                    <feature.icon className="text-primary mb-4" size={32} />
                                    <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Workflow Section */}
                {activeSection === 'workflow' && (
                    <div className="space-y-8 animate-fade-in">
                        <WorkflowStep
                            number="01"
                            title="Preparation Phase"
                            items={[
                                "Tag Assembly & Testing: Each Aqua-Tracker undergoes rigorous testing in a controlled environment to ensure all sensors (GPS, accelerometer, temperature, hydrophone, etc.), power systems, and satellite communication modules are fully functional and calibrated. ",
                                "Shark Identification & Permitting: Collaboration with marine biologists and obtaining all necessary permits for shark tagging from relevant authorities is paramount. Target shark species are identified based on research objectives. ",
                                "Team Training & Equipment Check: The deployment team (veterinarians, marine biologists, boat crew, technical specialists) is thoroughly briefed and trained on protocols. All necessary equipment – boat, tagging poles, shark handling gear, safety equipment, sedatives (if used), and backup tags – is checked."
                            ]}
                            color="cyan"
                        />
                        <WorkflowStep
                            number="02"
                            title="Shark Encounter & Capture"
                            items={[
                                "Locating Target Sharks: Researchers use established methods (e.g., chumming, visual spotting, or passive acoustic monitoring) to locate and attract a target shark. ",
                                "Gentle Capture & Restraint: Once a suitable shark is identified, it is briefly and safely brought alongside the research vessel or into a secure, temporary sling/pool on board. The method ensures minimal stress and injury to the animal. In many cases, sharks can be tagged in the water without full removal. ",
                                "Sedation (Optional, if required): Depending on the species and tagging method, a mild sedative might be administered by a veterinarian to ensure the shark remains calm and reduce stress during the brief procedure."
                            ]}
                            color="blue"
                        />
                        <WorkflowStep
                            number="03"
                            title="Aqua-Tracker Attachment"
                            items={[
                                " Site Selection: A suitable, non-invasive attachment site is chosen on the shark's dorsal fin or back, ensuring it won't interfere with swimming, feeding, or mating, and is robust enough for long-term adhesion.",
                                "Cleaning & Attachment: The attachment area is quickly cleaned. The Aqua-Tracker is then secured using a specialized clamp, dart, or adhesive system designed for marine environments. The attachment is quick, typically lasting only a few minutes",
                                "Health Check: Before release, a quick visual health assessment is performed on the shark. "
                            ]}
                            color="purple"
                        />
                        <WorkflowStep
                            number="04"
                            title="Release & Initial Monitoring"
                            items={[

                                "Initial Data Handshake: The Aqua-Tracker, once submerged, begins collecting data. When the shark first surfaces, the tag attempts its initial satellite uplink, establishing a connection with the Shark-Net platform. Researchers monitor for this initial data transmission to confirm successful deployment.",
                                "Safe Release: The shark is gently released back into the ocean, ensuring it swims away strongly."
                            ]}
                            color="green"
                        />
                        <WorkflowStep
                            number="05"
                            title="Continuous Data Collection"
                            items={[
                                "Autonomous Operation: The Aqua-Tracker operates autonomously, collecting data from its various sensors underwater.",
                                "Scheduled Uplinks: When the shark surfaces, the tag's antenna extends, and stored data (including processed foraging event logs, GPS coordinates, and environmental readings) is transmitted via satellite to the \"Shark-Net\" servers.",
                                "Real-time Processing: The Shark-Net platform automatically processes incoming data, updates shark tracks on interactive maps, overlays NASA satellite data (SWOT, PACE), and runs predictive models to identify foraging hotspots.",
                                "User Access & Alerts: Researchers, conservationists, and the public (via the educational interface) can access the SharkNet web or mobile app to view real-time data, historical trends, and receive alerts about predicted shark activity."

                            ]}
                            color="pink"
                        />
                        <WorkflowStep
                            number="06"
                            title="Long-Term Monitoring"
                            items={[
                                "Battery Life & Biodegradation: The Aqua-Tracker is designed for extended battery life months to years Some designs may incorporate a biodegradable attachment or a timed release mechanism for the tag to detach and float to the surface for potential recovery and data offload or simply to fall off naturally",
                                "Data Analysis & Refinement: Continuous data flow allows for ongoing analysis, refinement of predictive models, and deeper insights into shark ecology, directly contributing to conservation strategies."

                            ]}
                            color="orange"
                        />
                    </div>
                )}

                {/* Technology Section */}
                {activeSection === 'technology' && (
                    <div className="space-y-8 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TechCard
                                title="Aqua-Tracker Sensors"
                                icon={<Radio className="text-cyan-400" size={40} />}
                                features={[
                                    "GPS tracking for precise location data",
                                    "Accelerometer for movement patterns",
                                    "Temperature sensors for ocean conditions",
                                    "Hydrophone for underwater acoustics",
                                    "Pressure sensors for depth measurement"
                                ]}
                            />
                            <TechCard
                                title="Satellite Integration"
                                icon={<Satellite className="text-blue-400" size={40} />}
                                features={[
                                    "NASA SWOT: Sea surface height data",
                                    "NASA PACE: Chlorophyll and phytoplankton",
                                    "Real-time data synchronization",
                                    "Automated uplink scheduling",
                                    "Cloud-based data processing"
                                ]}
                            />
                            <TechCard
                                title="SharkNet Platform"
                                icon={<Waves className="text-purple-400" size={40} />}
                                features={[
                                    "Interactive real-time maps",
                                    "Historical trend analysis",
                                    "Predictive ML models",
                                    "Mobile and web access",
                                    "Alert system for researchers"
                                ]}
                            />
                            <TechCard
                                title="Conservation Impact"
                                icon={<Shield className="text-green-400" size={40} />}
                                features={[
                                    "Protected area identification",
                                    "Migration pattern tracking",
                                    "Public education interface",
                                    "Research collaboration tools",
                                    "Policy-making support data"
                                ]}
                            />
                        </div>
                    </div>
                )}
            </div>



        </div>
    );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
);

// Workflow Step Component
const WorkflowStep = ({ number, title, items, color }) => {
    const colorClasses = {
        cyan: 'from-cyan-500/20 to-cyan-500/5 border-cyan-400/30',
        blue: 'from-blue-500/20 to-blue-500/5 border-blue-400/30',
        purple: 'from-purple-500/20 to-purple-500/5 border-purple-400/30',
        green: 'from-green-500/20 to-green-500/5 border-green-400/30',
        pink: 'from-pink-500/20 to-pink-500/5 border-pink-400/30',
        orange: 'from-orange-500/20 to-orange-500/5 border-orange-400/30'
    };

    return (
        <div className={`bg-gradient-to-r ${colorClasses[color]} backdrop-blur-lg rounded-2xl p-8 border`}>
            <div className="flex flex-col md:flex-row items-start gap-6">
                <div className=" text-6xl font-bold text-white/20">{number}</div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
                    <ul className="space-y-4">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0"></div>
                                <p className="text-gray-200 text-[18px] text-justify leading-relaxed">{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// Tech Card Component
const TechCard = ({ title, icon, features }) => (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
            {icon}
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <ul className="space-y-3">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default SmartTagConcept;