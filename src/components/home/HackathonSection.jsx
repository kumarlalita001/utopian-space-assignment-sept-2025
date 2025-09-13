import { motion } from 'framer-motion';

const HackathonSection = () => {
  return (
    <section className="hackathon-section relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      {/* Background Effects */}
      <div className="absolute inset-0 spider-web-bg opacity-10" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Hackathon Title */}
        <div className="hackathon-title">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-orbitron font-bold text-tech-blue mb-4">
              PRESENTS
            </h2>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-gradient-spider glow-spider leading-tight">
              UTOPIAN SPACE
            </h1>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-gradient-spider glow-spider leading-tight mb-4">
              GLOBAL HACKATHON
            </h1>
            
            <div className="relative inline-block">
              <span className="text-6xl md:text-8xl font-orbitron font-black text-tech-blue glow-magic">
                -26
              </span>
              {/* <div className="absolute -top-2 -right-2 w-8 h-8 bg-spider-red rounded-full animate-pulse" /> */}
            </div>
          </motion.div>
        </div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-spider-red/30 rounded-lg p-6 shadow-spider">
            <h3 className="text-2xl font-orbitron font-bold text-spider-red mb-2">DURATION</h3>
            <p className="text-lg font-exo text-foreground/80">48 Hours</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-tech-blue/30 rounded-lg p-6 shadow-glow">
            <h3 className="text-2xl font-orbitron font-bold text-tech-blue mb-2">PRIZE POOL</h3>
            <p className="text-lg font-exo text-foreground/80">$50,000+</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-magic-purple/30 rounded-lg p-6 shadow-magic">
            <h3 className="text-2xl font-orbitron font-bold text-magic-purple mb-2">TEAMS</h3>
            <p className="text-lg font-exo text-foreground/80">1000+</p>
          </div>
        </motion.div>

        {/* Web Shooting Effect */}
        <div className="absolute top-1/2 left-1/4 w-1 h-32 bg-gradient-to-b from-spider-red to-transparent transform -rotate-45 animate-pulse opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-1 h-24 bg-gradient-to-b from-spider-red to-transparent transform rotate-45 animate-pulse opacity-30" />
        
        {/* Floating Web Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 border-2 border-spider-red/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HackathonSection;