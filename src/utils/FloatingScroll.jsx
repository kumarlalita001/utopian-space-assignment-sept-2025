import React, { useEffect, useRef, useState } from 'react';
import floatingSpiderImg from "../assets/floatingSpiderImg.jpg";
const FloatingScroll = () => {
  const imageRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress based on entire document
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(scrollTop / documentHeight, 0), 1);
      
      setScrollProgress(progress);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Calculate position based on scroll progress
  const getImageTransform = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const progress = scrollProgress;
    
    let x = 0, y = 0;
    
    if (progress <= 0.25) {
      // Left to right (top area)
      const localProgress = progress / 0.25;
      x = localProgress * (windowWidth - 100); // 100px for image width
      y = 50 + Math.sin(localProgress * Math.PI * 2) * 30; // Slight vertical wave
    } else if (progress <= 0.5) {
      // Top to bottom (right area)
      const localProgress = (progress - 0.25) / 0.25;
      x = windowWidth - 120 + Math.sin(localProgress * Math.PI * 3) * 40; // Slight horizontal wave
      y = 50 + localProgress * (windowHeight - 150); // 150px for image height
    } else if (progress <= 0.75) {
      // Right to left (bottom area)
      const localProgress = (progress - 0.5) / 0.25;
      x = (windowWidth - 100) - localProgress * (windowWidth - 100);
      y = windowHeight - 120 + Math.sin(localProgress * Math.PI * 2) * 30; // Slight vertical wave
    } else {
      // Bottom to top (left area)
      const localProgress = (progress - 0.75) / 0.25;
      x = 20 + Math.sin(localProgress * Math.PI * 3) * 40; // Slight horizontal wave
      y = (windowHeight - 100) - localProgress * (windowHeight - 150);
    }
    
    const rotation = progress * 360;
    const scale = 0.8 + Math.sin(progress * Math.PI * 4) * 0.3;
    
    return {
      transform: `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`,
      transition: 'transform 0.1s ease-out'
    };
  };

  return (
    <div
      ref={imageRef}
      className="fixed top-0 left-0 w-20 h-20 pointer-events-none z-50"
      style={{
        willChange: 'transform',
        ...getImageTransform()
      }}
    >
      <img
        src={floatingSpiderImg}
        alt="Floating element"
        className="w-full h-full object-cover rounded-full shadow-lg border-2 border-white"
      />
    </div>
  );
};

export default FloatingScroll;