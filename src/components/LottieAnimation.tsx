'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface LottieAnimationProps {
  className?: string;
  style?: React.CSSProperties;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ className = '', style = {} }) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<any>(null);

  useEffect(() => {
    if (animationContainer.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/Animation.json'  
      });

 
      return () => {
        if (animationInstance.current) {
          animationInstance.current.destroy();
        }
      };
    }
  }, []);

  return (
    <div
      ref={animationContainer}
      className={`w-64 h-64 sm:w-80 sm:h-80 mx-auto ${className}`}
      style={{
        maxWidth: '320px',
        maxHeight: '320px',
        ...style,
      }}
    />
  );
};

export default LottieAnimation; 