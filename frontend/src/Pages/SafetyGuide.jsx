import { Shield, MapPin, Clock, Droplets, Fish, Users, Eye, AlertTriangle, FileText, MessageSquare, ArrowLeft } from "lucide-react";
import safetyGuideImg from '../assets/safetyGuide.png';
import waterSafetyImg from '../assets/waterSafety.png';
import { Link } from "react-router";

const SafetyGuide = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#031A2E] to-[#072A44] text-white">
            <Link
                to="/"
                className="mx-2 md:mx-6 mt-6 inline-flex items-center gap-2 px-2 py-2 rounded-lg 
                               bg-gradient-to-r from-cyan-500 to-blue-500 
                               text-white font-semibold shadow-lg 
                               hover:cursor-pointer "
            >
                <ArrowLeft className="w-5 h-5" />

            </Link>

            <div className="flex justify-center items-center flex-col  py-12">
                <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stellar Sharks</h1>
                <div className="flex  items-center gap-2 mt-4">
                    <Shield className="w-6 h-6" />
                    <p className="text-xl md:text-2xl opacity-95">Ocean Safety Guide</p>
                </div>

            </div>


            {/* Main Content */}
            <main className="w-full md:max-w-11/12 mx-auto px-6 py-12 space-y-16">
                {/* Section 1 */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            Proactive Safety – Before You Enter the Water
                        </h2>

                        <p className="text-lg mt-4 text-[18px] text-justify text-gray-200">
                            The most effective safety measure is prevention. Use the Shark-Net platform to make informed decisions before you get in the water.
                        </p>
                    </div>

                    <div className="flex flex-col-reverse gap-6 xl:flex-row">

                        <div className="grid gap-5 md:grid-cols-2 xl:w-1/2">
                            {/* Card */}
                            <div className="bg-white/5 border border-cyan-500/30 rounded-xl p-6 shadow-md hover:shadow-cyan-500/30 transition">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-semibold">Check the Shark-Net Hotspot Map</h3>
                                        <p className="text-base text-[18px] text-justify mt-2 text-gray-300">
                                            Our platform uses Aqua-Tracker data (shark foraging
                                            patterns) and NASA satellite data (temperature,
                                            pollution) to predict high-activity zones. Avoid any
                                            area marked as a recent or predicted feeding
                                            hotspot.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-blue-500/30 rounded-xl p-6 shadow-md hover:shadow-blue-500/30 transition">
                                <div className="flex items-start gap-3">
                                    <Clock className="w-6 h-6 text-blue-400 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-semibold">Avoid Peak Foraging Hours</h3>
                                        <p className="text-base text-[18px] text-justify mt-2 text-gray-300">
                                            Sharks are often more active during dawn, dusk, and
                                            nighttime. Our data confirms this behavioral pattern.
                                            Plan your water activities for mid-day
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-green-500/30 rounded-xl p-6 shadow-md hover:shadow-green-500/30 transition">
                                <div className="flex items-start gap-3">
                                    <Droplets className="w-6 h-6 text-green-400 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-semibold">Stay Out of Murky Water</h3>
                                        <p className="text-base text-[18px] text-justify mt-2 text-gray-300">
                                            Turbid (murky) or polluted water makes it difficult for
                                            sharks to distinguish between prey and humans
                                            (Mistaken Identity). Shark-Net tracks pollution and
                                            water clarity data to help you identify these areas.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-pink-500/30 rounded-xl p-6 shadow-md hover:shadow-pink-500/30 transition">
                                <div className="flex items-start gap-3">
                                    <Fish className="w-6 h-6 text-pink-400 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-semibold">Steer Clear of Fishing Activity</h3>
                                        <p className="text-base text-[18px] text-justify mt-2 text-gray-300">
                                            Blood, fish scraps, and bait (chum) can draw sharks
                                            into the area and trigger a feeding response. Do not
                                            swim near commercial or sport fishing boats.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-purple-500/30 rounded-xl p-6  shadow-md hover:shadow-purple-500/30 transition md:col-span-2">
                                <div className="flex items-start gap-3">
                                    <Users className="w-6 h-6 text-purple-400 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-semibold">Never Swim Alone</h3>
                                        <p className="text-base text-[18px] text-justify mt-2 text-gray-300">
                                            Swim with a group or near a lifeguard. This makes you
                                            less appealing as a solitary target and provides
                                            immediate assistance if needed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/2">
                            <img src={waterSafetyImg} alt="Water Safety" className="w-full rounded-xl mb-6 shadow-lg  h-auto max-h-[720px] 
             md:h-[600px] lg:h-[700px] 
             object-cover " />
                        </div>
                    </div>
                </section>

                {/* Section 2 (In-Water) */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            In-Water Safety – What To Do If You Encounter a Shark
                        </h2>
                        <p className="text-lg text-gray-200 mt-4">
                            If a shark approaches or you feel uneasy, your goal is to exit the water
                            calmly and efficiently.

                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        <div>
                            <img src={safetyGuideImg} alt="Safety Guide" className="w-full rounded-xl mb-6 shadow-lg  h-auto max-h-[785px] 
             md:h-[600px] lg:h-[765px] 
             object-cover" />
                        </div>
                        <div className="space-y-4">
                            {[
                                "Maintain Calmness and Eye Contact",
                                "Face the Shark",
                                "Slow, Steady Retreat",
                                "Enact Defensive Measures (Last Resort)",
                                "Use Available Objects",
                            ].map((title, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/5 border border-cyan-400/30 rounded-xl p-6 hover:shadow-lg transition"
                                >
                                    <h3 className="text-xl font-semibold flex items-center gap-3">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 text-white font-bold">
                                            {idx + 1}
                                        </span>
                                        {title}
                                    </h3>
                                    <p className="mt-2 text-[18px] text-justify text-gray-300">
                                        {idx === 0 && "Avoid panic, splashing, or erratic movements, as these mimic an injured animal and can provoke an attack. If possible, keep the shark in sight."}
                                        {idx === 1 && "Turn your body to face the shark, making yourself appear less like an unaware prey animal. "}
                                        {idx === 2 && "Slowly and deliberately swim backward toward the shore or boat. Do not turn your back and sprint, as this can trigger a chase instinct."}
                                        {idx === 3 && " If a shark bites or is highly aggressive, fight back immediately and fiercely. Target the shark's most vulnerable areas: the eyes and the gills. These are sensitive spots that will often cause the shark to retreat."}
                                        {idx === 4 && "Use a surfboard, spear gun, or any solid objct as a barrier or a tool to poke the shark's sensitive areas."}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 3 (Post Encounter) */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">Post-Encounter & Reporting Tips</h2>

                        <p className="text-lg mt-4 text-gray-200">
                            Your users are a vital part of the data collection process. Encourage
                            them to report and take necessary action after an incident.

                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-white/5 border border-red-500/40 rounded-xl p-6">
                            <div className="flex gap-3">
                                <AlertTriangle className="w-6 h-6 text-red-400 mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold">1. Exit the Water Immediately</h3>
                                    <p className="mt-2 text-[18px] text-justify text-gray-300"> Do not re-enter the water. Alert
                                        anyone nearby and report the incident to local authorities or
                                        lifeguards.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-yellow-500/40 rounded-xl p-6">
                            <div className="flex gap-3">
                                <Shield className="w-6 h-6 text-yellow-400 mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold">2. Seek Medical Attention</h3>
                                    <p className="mt-2 text-[18px] text-justify text-gray-300">Even a minor scrape or bite must be
                                        immediately cleaned and examined by a medical professional due
                                        to the high risk of infection.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-cyan-500/40 rounded-xl p-6">
                            <div className="flex gap-3">
                                <MessageSquare className="w-6 h-6 text-cyan-400 mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold">3. Report to StellarSharks</h3>
                                    <p className="mt-2 text-[18px] text-justify text-gray-300">Action: Use the "Report Incident" feature on the Shark-Net
                                        app or website.</p>
                                    <p className="mt-2 text-[18px] text-justify text-gray-300">Why: Your real-time information on the shark's species, size,
                                        location, and behavior helps us refine our AI prediction
                                        models and issue immediate, hyper-local warnings to others
                                        in the area.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-blue-500/40 rounded-xl p-6">
                            <div className="flex gap-3">
                                <FileText className="w-6 h-6 text-blue-400 mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold">4. Document the Incident</h3>
                                    <p className="mt-2 text-[18px] text-justify text-gray-300">Note the exact time, location (GPS
                                        coordinates if possible), water conditions (turbidity, temperature),
                                        and the estimated size/species of the shark. This information is
                                        invaluable to conservation scientists using your data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    );
};

export default SafetyGuide;
