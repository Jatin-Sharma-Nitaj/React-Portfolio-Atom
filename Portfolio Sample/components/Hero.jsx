import React from 'react';

import { heroData } from '../JS/HeroData';
import SocialHandles from './SocialHandles';
import { ImPower } from 'react-icons/im';


const Hero = () => {
    return (
        <div className='h-full bg-cover bg-no-repeat'
            style={{ backgroundImage: "url('img/bg-hero.jpg')" }}>
            <div className="Hero  inset-0 bg-gradient-to-b from-[#533FA7]/80 to-[#463592]/80  bg-opacity-50 w-full h-[95vh] bg-[#513EA2] ">
                <nav className="Navbar py-5 mx-auto px-[20vh] flex justify-between items-center">
                    <div className="logo">
                        <img src="img/logo.svg" className="w-24 lg:w-48" alt="logo image"></img>
                    </div>

                    <div className="links text-xl gap-5 text-white font-bold uppercase flex space-x-4">
                        {heroData.navlinks.map((link, index) => {
                            return <a className='hover:underline' href="" key={index}>{link}</a>;
                        })}
                    </div>
                </nav>

                <div className="hero h-auto flex items-center justify-center">
                    <div className="container h-[65vh] gap-6 caption-bottom bg-red600 flex items-center justify-center w-screen">
                        <div className="imgbox  rounded-full border-[#6c54d4] border-8 ">
                            <img src="/img/blog-author.jpg" className="h-56 rounded-full " alt="author"></img>
                        </div>
                        <div className="content flex flex-col items-start gap-6">
                            <h1 className="text-white  px-2 text-6xl font-bold leading-snug">
                                {heroData.heading}
                            </h1>
                            <div className="text_and_icons flex items-center gap-2">
                                <div className="smalltext px-3 pt-0 text-white text-2xl font-medium">
                                    {heroData.subtext}
                                </div>
                                <SocialHandles iconColor="white" />
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;





