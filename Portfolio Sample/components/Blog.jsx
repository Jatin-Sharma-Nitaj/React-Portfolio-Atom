import React from 'react'
import { BlogData } from '../JS/BlogData'


const Blog = () => {
    return (
        <div className='bg-[#D3CEE4]'>
            <div className="content w-full min-h-screen ">
                <div className="text">

                    <div className="container pt-6 flex items-center justify-center px-5 py-5  w-full h-auto mx-auto">
                        <h1 className='text-7xl font-semibold uppercase text-[#5540AF]'>I also like to write</h1>
                    </div>
                    {/* semiheading */}
                    <div className="container pt-2 flex items-center justify-center px-2 py-2  w-full h-auto mx-auto">
                        <h1 className='text-4xl font-medium text-black'>Check out my latest posts!</h1>
                    </div>
                </div>
                <div className="cards container px-6 py-8 mx-auto flex flex-wrap gap-10 justify-center cursor-pointer items-stretch">
                    {BlogData.map((card, index) => (
                        <div 
                            key={index}
                            className="imgcard border border-gray-300 bg-white shadow-lg w-[28rem] h-[30rem] rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
                        >
                            {/* Image Section */}
                            <div className="img h-[60%]">
                                <img
                                    className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
                                    src={card.img}
                                    alt={card.heading}
                                />
                            </div>

                            {/* Text Section */}
                            <div className="text p-6 h-[40%]">
                                <h1 className="text-2xl font-bold text-gray-800 mb-2">{card.heading}</h1>
                                <p className="text-gray-600 text-base">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Blog