import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const wishes = [
  { name: 'Mom', message: 'Happy Birthday, dear! We love you so much!', src: '/audio/mom-wish.mp3' },
  { name: 'Dad', message: 'Wishing you all the happiness in the world!', src: '/audio/dad-wish.mp3' },
];

const WishWall = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRefs = useRef([]);

  const togglePlay = (index) => {
    if (playingIndex === index) {
      audioRefs.current[index].pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        audioRefs.current[playingIndex].pause();
      }
      audioRefs.current[index].play();
      setPlayingIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-pink-500 flex flex-col items-center justify-center py-10 px-5">
      <h1 className="text-4xl font-bold text-white mb-8">💌 Wish Wall 💌</h1>
      
      <div className="space-y-6 w-full max-w-lg">
        {wishes.map((wish, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-5 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-pink-600">{wish.name}</h2>
              <p className="text-gray-700">{wish.message}</p>
            </div>
            <button 
              className="p-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition"
              onClick={() => togglePlay(index)}
            >
              {playingIndex === index ? <FaPause /> : <FaPlay />}
            </button>
            <audio ref={(el) => (audioRefs.current[index] = el)} src={wish.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishWall;
