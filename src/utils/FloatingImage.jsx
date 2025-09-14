import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import floatingSpiderImg from "../assets/floatingSpiderImg.jpg";

gsap.registerPlugin(ScrollTrigger);

const FloatingImage = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top center", // when the image hits center of viewport
        end: "bottom top",   // when it leaves viewport
        scrub: true,         // sync with scroll
        markers: false,      // set true for debugging
      },
    })
      .to(el, { x: 300, y: 0, duration: 2 })   // left ➝ right
      .to(el, { x: 300, y: 200, duration: 2 }) // top ➝ bottom
      .to(el, { x: 0, y: 200, duration: 2 })   // right ➝ left
      .to(el, { x: 0, y: 0, duration: 2 });    // bottom ➝ top (reset)
  }, []);

  return (
    <div className="h-[200vh] flex items-center justify-center bg-gray-900">
      <img
        ref={imgRef}
        src={floatingSpiderImg}
        alt="floating"
        className="w-40 h-40 rounded-full shadow-xl"
      />
    </div>
  );
};

export default FloatingImage;
