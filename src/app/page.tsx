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
          <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-white mb-6 leading-tight">
            Northeastern <span className="text-primary-500">AI</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-400 leading-relaxed mb-10 sm:max-w-none">
            Shaping the future of AI at&nbsp;Northeastern University&nbsp;Boston.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          </div>
        </div>
      </div>
    </main>
  );
}