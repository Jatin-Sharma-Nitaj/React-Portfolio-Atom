import React from 'react';

const WorkXP = () => {
    return (
        <div className="px-8 py-20 mx-auto max-w-7xl ">
            <h2 className="text-5xl font-bold text-center border-1-2 text-indigo-600 mb-12">
                MY WORK EXPERIENCE
            </h2>
            <p className="text-2xl text-center text-gray-600 mb-20">
                Here's what I did before freelancing
            </p>
            <div className="relative space-y-16">
                {/* Timeline Item 1 */}
                <div className="flex items-start space-x-8">
                    <img src="img/logo-spotify.svg" alt="Spotify" className="h-20 w-20 object-contain" />
                    
                    <div className="border-l-4 border-indigo-600"></div>
                    <div className="flex flex-col">
                        <span className="text-lg text-gray-500">Apr 2015 - Mar 2018</span>
                        <h3 className="text-2xl font-semibold text-indigo-600">Frontend Developer</h3>
                        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim.
                        </p>
                    </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="flex items-start space-x-8">
                    <img src="img/logo-microsoft.svg" alt="Microsoft" className="h-20 w-20 object-contain" />
                    <div className="border-l-4 border-indigo-600"></div>
                    <div className="flex flex-col">
                        <span className="text-lg text-gray-500">Mar 2018 - Sept 2019</span>
                        <h3 className="text-2xl font-semibold text-indigo-600">Software Engineer</h3>
                        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim.
                        </p>
                    </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="flex items-start space-x-8">
                    <img src="img/logo-fedex.svg" alt="FedEx" className="h-20 w-20 object-contain" />
                    <div className="border-l-4 border-indigo-600"></div>
                    <div className="flex flex-col">
                        <span className="text-lg text-gray-500">Oct 2019 - Feb 2021</span>
                        <h3 className="text-2xl font-semibold text-indigo-600">DevOps Engineer</h3>
                        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkXP;
