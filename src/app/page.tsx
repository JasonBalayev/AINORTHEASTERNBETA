'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

 
const Lottie = dynamic(() => import('../components/LottieAnimation'), { ssr: false });

export default function Home() {
  const [activated, setActivated] = useState(false);
  const [hovered, setHovered] = useState(false);

  const shift = 250;  
  const lottieBaseTransform = hovered
    ? 'translate(-50%, -55%) scale(1.08)' 
    : 'translate(-50%, -50%)';

  const lottieTransform = activated
    ? `translate(-50%, -50%) translateX(${shift}px)`  
    : lottieBaseTransform;

  const heroTransform = activated
    ? `translate(-50%, -50%) translateX(-${shift}px)`  
    : 'translate(-50%, -50%)';

  return (
    <main className="relative min-h-screen bg-black overflow-hidden font-sans">
  
      <div
        className={`absolute top-1/2 left-1/2 transition-transform ease-in-out ${
          activated ? 'pointer-events-none duration-700' : 'cursor-pointer duration-300'
        }`}
        style={{ transform: lottieTransform }}
        onClick={() => {
          if (!activated) setActivated(true);
        }}
        onMouseEnter={() => {
          if (!activated) setHovered(true);
        }}
        onMouseLeave={() => {
          if (!activated) setHovered(false);
        }}
      >
        <Lottie />
      </div>
 
      <div
        className={`absolute top-1/2 left-1/2 transition-opacity transition-transform duration-700 ease-in-out ${activated ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ transform: heroTransform }}
      >
        <div className="relative z-10 max-w-xl text-center sm:text-left px-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Northeastern AI
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Shaping the future of AI at Northeastern University, Boston.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button className="px-6 py-3 bg-white text-black rounded-full font-medium transition-colors hover:bg-gray-200">
              Join the Club
            </button>
            <button className="px-6 py-3 border border-gray-500 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
