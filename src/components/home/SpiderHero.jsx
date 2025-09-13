import { motion } from 'framer-motion';
import spiderHeroImage from "../../assets/spiderman-hero.jpg";
import webOverlay from "../../assets/spider-web-overlay.png";


const SpiderHero = () => {
  return (
    <section className="spider-section relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Web Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="web-pattern absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${webOverlay})` }}
        />
      </div>

      {/* Parallax Background */}
      <div 
        className="parallax-bg absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${spiderHeroImage})` }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Spider-Man Animation Container */}
        <div className="spider-hero mb-12">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative inline-block"
          >
            <img 
              src={spiderHeroImage}
              alt="Spider-Man Hero"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-spider-red shadow-spider animate-spider-swing"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-spider opacity-20 animate-pulse" />
          </motion.div>
        </div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black mb-6 text-gradient-spider glow-spider"
        >
          SPIDER
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xl md:text-2xl font-exo text-foreground/80 mb-8"
        >
          Welcome to the Future of Web Development
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10  border-2 border-spider-red rounded-full flex justify-center">
            <div className="w-1 h-3  bg-spider-red rounded-full animate-bounce mt-2" />
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-spider-red-glow rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -100, null],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default SpiderHero;