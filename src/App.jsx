import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import { Header } from "./components/common/Header";
import Footer from "./components/common/Footer";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./Layout";
import AiChatBot from "./pages/AiChatBot";
import FloatingImage from "./utils/FloatingImage";
import FloatingScrollImage from "./utils/FloatingSpiderImg";
import FloatingScroll from "./utils/FloatingScroll";

const App = () => {
  return (
    <div>
      <div className="min-h-screen w-full">
        {/* <FloatingImage/> */}

        {/* <FloatingScrollImage/> */}

        <FloatingScroll/>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/chatAi" element={<AiChatBot />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
