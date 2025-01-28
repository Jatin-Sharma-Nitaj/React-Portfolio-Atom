import React from 'react';
import SocialHandles from './SocialHandles';

const Location = () => {
    return (
        <div className="flex flex-col h-screen bg-[#5540AF]">
            {/* Map Section */}
            <div
                className="h-[45%] bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: "url('/img/map.png')" }}
                aria-label="Map background"
            ></div>

            {/* CTA Section */}
            <div
                className="h-[45%] bg-cover bg-center flex flex-col items-center justify-center pt-20"
                style={{ backgroundImage: "url('/img/bg-cta.jpg')" }}
            >
                <div className="text-center text-white">
                    <h1 className="text-5xl leading-tight uppercase">
                        Keep
                        <span className="font-bold pl-3">up-to-date</span>
                    </h1>
                    <h1 className="text-5xl uppercase mt-2">
                        with what I'm up to
                    </h1>
                </div>
                <div className="flex gap-3 mt-6">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-[40vh] text-lg text-black rounded focus:outline-none p-2"
                        aria-label="Email input field"
                    />
                    <button
                        className="h-12 px-6 text-lg uppercase bg-yellow-300 text-[#5540AF] rounded-r-lg hover:bg-[#5540AF] hover:text-white transition-colors duration-300"
                        aria-label="Join the club"
                    >
                        Join the club
                    </button>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="h-[10%] flex items-center justify-between px-8 text-white">
                <div>
                    <h2>© Copyright 2022. All rights reserved, ATOM.</h2>
                </div>
                <div>
                    <SocialHandles />
                </div>
            </footer>
        </div>
    );
};

export default Location;
