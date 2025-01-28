import React from 'react';
import SocialHandles from './SocialHandles';
import { aboutData, achievements } from '../JS/AboutData';

const About = () => {
    return (
        <div className="bg-[#edeaf7] flex h-auto py-16 px-6 lg:px-20">
            {/* aboutme */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
                {/* Content */}
                <div className="left flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
                    {/* //Name */}
                    <h1 className="text-4xl lg:text-8xl font-bold text-[#4C3C91] mb-6 leading-tight">
                        {aboutData.Name}
                    </h1>

                    {/* summery */}
                    <p className="font-semibold  lg:text-xl text-gray-700 text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                        {aboutData.summery}
                    </p>
                    {/* achivment */}
                    <ul className="mt-6 space-y-6 text-gray-600 text-md lg:text-lg">
                        {achievements.map((item, index) => (
                            <li key={index} className="flex cursor-pointer items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"        >
                                <span className="text-3xl text-[#4C3C91]">{item.icon}</span>
                                <span className="font-semibold text-gray-800">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                    {/* Social Handles Section */}
                    <div className="mt-8 flex items-center gap-6">
                        <span className="text-xl font-medium text-[#4C3C91]">Contact Here</span>
                        <SocialHandles iconColor="#4C3C91" />
                    </div>
                </div>
            </div>
            {/* images section */}
            <div className="img flex flex-wrap gap-4 w-full lg:w-1/2">
               
                <div className="w-auto h-[40vh] rounded-md overflow-hidden">
                    <img src="https://www.sgrru.ac.in/images/sgrru-basic-applied-sciences.jpg" alt="Pankaj" className="w-full h-full object-cover" />
                </div>
                <div className="w-auto h-[40vh] rounded-md overflow-hidden">
                    <img src="https://www.sgrru.ac.in/images/sgrru-pharmaceutical-sciences.jpg" alt="Pankaj" className="w-full h-full object-cover" />
                </div>

            </div>


        </div>
    );
};

export default About;
