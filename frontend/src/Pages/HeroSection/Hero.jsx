import { Info, MapPin, Radio, ShieldUser } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div className="relative h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/src/assets/hero-ocean-satellite.jpg')] bg-cover bg-center"></div>

            {/* Black Overlay with opacity */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 h-screen container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto flex flex-col justify-center h-full text-white">


                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Stellar Sharks
                    </h1>

                    <p className=" md:text-xl  text-center lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Predicting shark foraging habitats using advanced satellite oceanography and
                        real-time smart tag technology for marine conservation
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link to="/dashBoard" className="btn px-3 py-2 bg-cyan-600 rounded-md flex items-center hover:cursor-pointer hover:bg-cyan-700 transition-colors">
                            <MapPin className="w-5 h-5 mr-2" />
                            Explore Habitat Maps
                        </Link>
                        <Link to="/smart-tag" className="btn px-3 py-2 bg-cyan-600 rounded-md flex items-center hover:cursor-pointer hover:bg-cyan-700 transition-colors">
                            <Radio className="w-5 h-5 mr-2" />
                            Smart Tag Concept
                        </Link>
                        <Link to="/safety-guide" className="btn px-3 py-2 bg-cyan-600 rounded-md flex items-center hover:cursor-pointer hover:bg-cyan-700 transition-colors">
                            <ShieldUser className="w-5 h-5 mr-2" />
                            Safety Guide
                        </Link>
                        <Link to="/about" className="btn px-3 py-2 bg-cyan-600 rounded-md flex items-center hover:cursor-pointer hover:bg-cyan-700 transition-colors">
                            <Info className="w-5 h-5 mr-2" />
                            About
                        </Link>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Hero;
