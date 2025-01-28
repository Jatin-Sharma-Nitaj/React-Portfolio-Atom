import React from 'react';
import { PortfolioData } from '../JS/PortfolioImg';

const Portfolio = () => {
  return (
    <div className='w-full min-h-screen'>
      <div className='w-full pt-16 bg-[#d3cee4]'>
        {/* content */}
        <div className="text">
          {/* Heading */}
          <div className="container pt-6 flex items-center justify-center px-5 py-5 w-full h-auto mx-auto">
            <h1 className='text-7xl font-semibold uppercase text-[#5540AF]'>Check out my Portfolio</h1>
          </div>
          {/* semiheading */}
          <div className="container pt-2 flex items-center justify-center px-5 py-5 w-full h-auto mx-auto">
            <h1 className='text-5xl font-medium text-black'>Here's My Past Work</h1>
          </div>
        </div>
        {/* cards container*/}
        <div className="images">
          <div className="content px-20 py-10 grid grid-cols-2 gap-6">
            {PortfolioData.map((img, index) => (
              <div key={index} className="hoverimg w-full">
                <img src={img.img} alt="era" className="w-full h-auto rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
