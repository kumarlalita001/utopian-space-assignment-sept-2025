import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FloatingScrollImage = () => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const container = containerRef.current;
    
    if (!image || !container) return;

    // Create timeline for the floating animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrubbing
        onUpdate: (self) => {
          const progress = self.progress;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          
          // Calculate positions based on scroll progress
          let x, y;
          
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
          
          // Apply transform with smooth rotation
          gsap.set(image, {
            x: x,
            y: y,
            rotation: progress * 360,
            scale: 0.8 + Math.sin(progress * Math.PI * 4) * 0.3,
          });
        }
      }
    });

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Fixed positioned floating image - overlays everything */}
      <div
        ref={imageRef}
        className="fixed top-0 left-0 w-20 h-20 pointer-events-none z-50"
        style={{ willChange: 'transform' }}
      >
        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=100&h=100&fit=crop&crop=center"
          alt="Floating element"
          className="w-full h-full object-cover rounded-full shadow-lg border-2 border-white"
        />
      </div>

      {/* Container that defines scroll area */}
      <div ref={containerRef} className="relative">
        {/* Demo content - multiple sections */}
        <section className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Section 1</h1>
            <p className="text-xl">The image floats from left to right here</p>
          </div>
        </section>

        <section className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Section 2</h1>
            <p className="text-xl">Now it moves from top to bottom</p>
          </div>
        </section>

        <section className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Section 3</h1>
            <p className="text-xl">Here it floats from right to left</p>
          </div>
        </section>

        <section className="min-h-screen bg-gradient-to-br from-yellow-400 to-green-500 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Section 4</h1>
            <p className="text-xl">Finally, it moves from bottom to top</p>
          </div>
        </section>

        <section className="min-h-screen bg-gradient-to-br from-red-400 to-yellow-500 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Final Section</h1>
            <p className="text-xl">Animation complete! Scroll back up to see it reverse.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FloatingScrollImage;