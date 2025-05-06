import React from 'react';
const memories = [
  {
    image: '/images/photo1.jpg',
    message: 'You light up every room!',
  },
  {
    image: '/images/photo2.jpg',
    message: 'My partner in crime forever!',
  },
  {
    image: '/images/photo3.jpg',
    message: 'Always smiling, always glowing!',
  },
  {
    image: '/images/photo4.jpg',
    message: 'You light up every room!',
  },
  {
    image: '/images/photo5.jpg',
    message: 'My partner in crime forever!',
  },
  {
    image: '/images/photo6.jpg',
    message: 'Always smiling, always glowing!',
  },
  {
    image: '/images/photo7.jpg',
    message: 'You light up every room!',
  },
  {
    image: '/images/photo8.jpg',
    message: 'My partner in crime forever!',
  },
  {
    image: '/images/photo9.jpg',
    message: 'Always smiling, always glowing!',
  },
];

const MemoryLane = () => {
  return (
    <div
    className="min-h-screen w-full bg-repeat-y bg-left-top flex justify-center items-start"
    style={{
      backgroundImage: "url('/images/bg-floral.jpg')",
      backgroundSize: '100%',
    }}
  >
    <div className="min-h-screen py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-black-300 mb-10">
        Memory Lane
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {memories.map((memory, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-black-300 group"
          >
            <img
              src={memory.image}
              alt={`Memory ${index + 1}`}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <p className="text-white text-lg font-semibold drop-shadow-md">
                {memory.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MemoryLane;
