import React from 'react';

const LetterToAkka = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center p-6"
      style={{
        backgroundImage: "url('/images/page-texture.webp')",
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-10 border-4 border-pink-300 relative">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-700 text-center mb-6">
          To My Dearest Akka 💖
        </h1>

        <p className="text-lg text-gray-800 leading-relaxed mb-4">
          You know what, I am nothing without you. I might be in a good college now, but everything is because I followed you. 🌸 You are my inspiration. I don't even know when you realized you had to spend more time with me and treat me well... but that was the best decision you ever made about me. 💕
        </p>

        <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Sure, you tortured me a lot when we were little 😅, but I forgot it all because of the endless love you've given me since then. And you know what? People are always shocked when I say I love my sister more than my parents. They ask, "How is that even possible?" Well, I don’t know how... but it’s true. 🥰
        </p>

        <p className="text-lg text-gray-800 leading-relaxed mb-4">
          We didn’t quarrel much because we were both too scared of Amma and Nanna 😂—maybe that was the best thing, because it made our bond even stronger.
        </p>

        <p className="text-lg text-gray-800 leading-relaxed mb-4">
          I’ll never forget those nights when we whispered secrets under the blanket 🌙, giggling about silly things. Those naughty little adventures, those talks, those moments... they’re some of my favorite memories with you. 💫
        </p>

        <p className="text-lg text-pink-600 font-semibold mt-8 text-center">
          Love you forever, Akka ❤️  
        </p>
      </div>
    </div>
  );
};

export default LetterToAkka;
