// utils/scrollToTop.js
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // smooth scrolling animation
  });
};

// usage

//import React, { useRef } from "react";
//import { scrollToSection } from "./utils/scrollToSection";

/*

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex gap-4 bg-gray-900 text-white p-4">
        <button onClick={() => scrollToSection(aboutRef)}>About</button>
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
      </nav>

      <div className="h-screen flex items-center justify-center bg-blue-100">
        <h1>Home Section</h1>
      </div>

      <div ref={aboutRef} className="h-screen flex items-center justify-center bg-green-100">
        <h1>About Section</h1>
      </div>

      <div ref={contactRef} className="h-screen flex items-center justify-center bg-yellow-100">
        <h1>Contact Section</h1>
      </div>
    </div>
  );
}

export default App;

*/
