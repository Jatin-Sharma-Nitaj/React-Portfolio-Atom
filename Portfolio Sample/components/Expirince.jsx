import React from 'react'
import { cardsData } from '../JS/CardsData';
   
function Expirince() {
  return (
    <div className='min-h-screen w-full'>
      {/* content */}
      <div className="text">
        {/* Heading */}
        <div className="container pt-6 flex items-center justify-center px-5 py-5  w-full h-auto mx-auto">
          <h1 className='text-7xl font-semibold uppercase text-[#5540AF]'>Here's what I'm good at</h1>
        </div>
        {/* semiheading */}
        <div className="container pt-2 flex items-center justify-center px-5 py-5  w-full h-auto mx-auto">
          <h1 className='text-5xl font-medium text-black'>These Are The Services I Offer</h1>
        </div>
      </div>
      {/* cards  contaiener*/}
      <div className="  h-3/4 mx-auto px-26">
        {/* img */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="card px-5 border-gray-300 hover:scale-105 cursor-pointer transition-transform duration-300 border bg-white h-full rounded-2xl text-black"
            >
              <img  src={card.img} alt={card.title} className="w-full h-40" />
              <div className="p-6 text-center">
                <h3 className="text-2xl text-[#5540AF]  font-bold uppercase">
                  {card.title}
                </h3>
                <p className="text-gray-600 mt-2 text-xl">{card.description}</p>
              </div>
            </div>
          ))}
        </div>



      </div>


    </div>
  )
}

export default Expirince