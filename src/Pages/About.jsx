import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import shakib from '../assets/team/shakib.jpg';
import atik from '../assets/team/atik.jpg';
import ahsan from '../assets/team/ahsan.jpg';
import ety from '../assets/team/ety khatun .png';
import zisan from '../assets/team/zisan.jpg';
import rafi from '../assets/team/Rafi.jpg';
const About = () => {
    const teamMembers = [
        { name: "Md Atikur Rahman", title: "Team Leader", image: atik },
        { name: "Md Ahsanur Rahaman", title: "Researcher", image: ahsan },
        { name: "Ety Khatun", title: "Video Editor", image: ety },
        { name: "Md Shakib Akando", title: "Developer", image: shakib },
        { name: "Zisan Ul Haque", title: "Ui/Ux Designer", image: zisan },
        { name: "Md Rafiul Islam", title: "Voice & Narrator", image: rafi }
    ];

    const sectionStyle = "bg-white/5 border border-[#4FB3D4]/20 backdrop-blur-sm rounded-xl p-8 shadow-lg";

    return (
        <div className="min-h-screen bg-[#031A2E]">
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
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 "></div>
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-[#4FB3D4] to-[#2E8B9E] mx-auto"></div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-5 px-4">
                <div className="container mx-auto max-w-11/12">
                    <div className={sectionStyle}>
                        <h2 className="text-3xl font-bold text-[#4FB3D4] mb-6">Introduction</h2>
                        <p className="text-gray-300 md:text-xl text-justify leading-relaxed mb-4">
                            Stellar Sharks is an innovative marine conservation platform that combines cutting-edge NASA satellite technology with real-time tracking systems to protect shark populations and ensure human safety in our oceans. Our project addresses the critical need for shark habitat monitoring and predictive analytics in an era where marine ecosystems face unprecedented challenges.
                        </p>
                        <p className="text-gray-300 md:text-xl text-justify leading-relaxed">
                            By leveraging satellite data including chlorophyll concentration, phytoplankton distribution, and ocean temperature, we create comprehensive habitat prediction maps that identify shark hotspots. Our integrated approach combines data visualization, smart tracking technology, and safety protocols to foster coexistence between humans and these magnificent apex predators.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-5 px-4 bg-gradient-to-b from-transparent via-[#0a4d6e]/20 to-transparent">
                <div className="container mx-auto max-w-11/12 grid lg:grid-cols-2 gap-8">
                    <div className={sectionStyle}>
                        <h2 className="text-3xl font-bold text-[#4FB3D4] mb-6">Mission Statement</h2>
                        <p className="text-gray-300 md:text-xl text-justify leading-relaxed">
                            Our mission is to revolutionize shark conservation and marine safety through data-driven technology. We strive to bridge the gap between scientific research and practical implementation by providing accessible, real-time information about shark habitats and movements. Through our platform, we aim to reduce human-shark conflicts, support marine research, and promote sustainable ocean management while raising awareness about the vital role sharks play in maintaining healthy marine ecosystems.
                        </p>
                    </div>
                    <div className={sectionStyle}>
                        <h2 className="text-3xl font-bold text-[#4FB3D4] mb-6">Vision Statement</h2>
                        <p className="text-gray-300 md:text-xl text-justify leading-relaxed">
                            We envision a future where advanced technology and environmental stewardship work in harmony to protect our oceans. Stellar Sharks aims to become the global standard for marine habitat monitoring, enabling researchers, conservationists, and communities worldwide to make informed decisions that ensure the survival of shark species while maintaining safe coastal environments. We believe in a world where humans and marine life coexist peacefully, supported by transparent data and collaborative conservation efforts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Background Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-11/12">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">Background</h2>
                    <div className="space-y-8">
                        <div className={sectionStyle}>
                            <h3 className="text-2xl font-bold text-[#4FB3D4] mb-4">The Challenge</h3>
                            <p className="text-gray-300 md:text-xl text-justify leading-relaxed">
                                Shark populations worldwide have declined by over 70% in the past 50 years, yet they remain essential to ocean health as apex predators. Simultaneously, human-shark encounters continue to cause concern for coastal communities. Traditional monitoring methods are expensive, limited in scope, and often reactive rather than proactive. There existed a critical need for an accessible, predictive system that could benefit both conservation efforts and public safety.
                            </p>
                        </div>

                        <div className={sectionStyle}>
                            <h3 className="text-2xl font-bold text-[#4FB3D4] mb-4">Our Approach</h3>
                            <p className="text-gray-300 md:text-xl text-justify leading-relaxed">
                                Stellar Sharks was developed to address this dual challenge through technology integration. We utilize NASA satellite data to analyze ocean conditions including chlorophyll concentration, phytoplankton density, and water temperature patterns that indicate prime shark habitats. Our predictive algorithms identify high-probability shark zones by recognizing the environmental factors that attract these predators. The platform features an interactive dashboard with real-time mapping, data visualization through charts and graphs, and temporal prediction models.
                            </p>
                        </div>

                        <div className={sectionStyle}>
                            <h3 className="text-2xl font-bold text-[#4FB3D4] mb-4">Smart Tag Innovation</h3>
                            <p className="text-gray-300 md:text-xl text-justify leading-relaxed">
                                Beyond satellite predictions, we've designed a Smart Tag concept – an advanced electronic tracking device that enables live monitoring of individual sharks. This technology tracks movement patterns, feeding behavior, depth preferences, and environmental conditions in real-time. The data collected enriches our predictive models and provides researchers with unprecedented insights into shark behavior and ecology.
                            </p>
                        </div>

                        <div className={sectionStyle}>
                            <h3 className="text-2xl font-bold text-[#4FB3D4] mb-4">Safety and Education</h3>
                            <p className="text-gray-300 md:text-xl text-justify leading-relaxed">
                                Understanding that coexistence requires knowledge, Stellar Sharks includes comprehensive safety guidelines for ocean users. Our platform educates the public about shark behavior, prevention strategies, and appropriate responses during encounters. By combining predictive warnings with educational resources, we empower communities to enjoy ocean activities while respecting marine wildlife. The project represents a holistic approach to marine conservation, merging satellite technology, IoT innovation, data science, and community engagement to create a sustainable future for both sharks and humans.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4 bg-gradient-to-b from-transparent via-[#0a4d6e]/20 to-transparent">
                <div className="container mx-auto max-w-11/12">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6  gap-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className={`${sectionStyle} overflow-hidden group hover:border-[#4FB3D4]/40 transition-all duration-300`}>
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="h-72 w-72 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-2 pt-3 text-center">
                                    <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                                    <p className="text-[#4FB3D4]">{member.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="h-16"></div>
        </div>
    );
};

export default About;
