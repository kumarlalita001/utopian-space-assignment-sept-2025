import { motion } from 'framer-motion';
import doctorStrangeImage from "../../assets/doctor-strange-magic.jpg"


const SponsorsSection = () => {
  const sponsors = [
    { name: 'Marvel Studios', category: 'Title Sponsor', tier: 'platinum' },
    { name: 'Stark Industries', category: 'Technology Partner', tier: 'gold' },
    { name: 'Oscorp', category: 'Innovation Partner', tier: 'gold' },
    { name: 'Wakanda Tech', category: 'Digital Partner', tier: 'silver' },
    { name: 'Sanctum Sanctorum', category: 'Mystic Partner', tier: 'silver' },
    { name: 'Daily Bugle', category: 'Media Partner', tier: 'bronze' },
  ];

  return (
    <section className="sponsors-section relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/20 to-background ">
      {/* Doctor Strange Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${doctorStrangeImage})` }}
      />
      
      {/* Magic Portal Effect */}
      {/* <div className="absolute  top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="magic-portal w-64 h-64 opacity-30 animate-portal-spin" />
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-orbitron font-black text-gradient-magic glow-magic mb-4">
            SPONSORS
          </h2>
          <p className="text-xl md:text-2xl font-exo text-foreground/80">
            Powered by the greatest heroes and innovators
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mx-10">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="sponsor-card group"
              initial={{ opacity: 0, y: 100, rotateX: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`
                relative bg-card/70 backdrop-blur-sm rounded-lg p-6 border-2 
                transition-all duration-300 group-hover:shadow-2xl
                ${sponsor.tier === 'platinum' ? 'border-magic-gold shadow-magic' : 
                  sponsor.tier === 'gold' ? 'border-magic-orange shadow-glow' :
                  sponsor.tier === 'silver' ? 'border-tech-blue shadow-spider' :
                  'border-spider-red/50'}
              `}>
                {/* Tier Badge */}
                <div className={`
                  absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-orbitron font-bold
                  ${sponsor.tier === 'platinum' ? 'bg-magic-gold text-background' :
                    sponsor.tier === 'gold' ? 'bg-magic-orange text-background' :
                    sponsor.tier === 'silver' ? 'bg-tech-blue text-background' :
                    'bg-spider-red text-primary-foreground'}
                `}>
                  {sponsor.tier.toUpperCase()}
                </div>

                {/* Sponsor Content */}
                <h3 className="text-2xl font-orbitron font-bold mb-2 text-foreground group-hover:text-gradient-magic">
                  {sponsor.name}
                </h3>
                <p className="text-sm font-exo text-muted-foreground">
                  {sponsor.category}
                </p>

                {/* Magic Effect on Hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-magic opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Magic Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-magic-gold rounded-full animate-magic-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>

        {/* Doctor Strange Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 bg-card/30 backdrop-blur-sm border border-magic-purple/30 rounded-lg p-8 max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl font-exo italic text-foreground/90 mb-4">
            "The barriers between worlds have never been stronger, but innovation knows no bounds."
          </p>
          <p className="text-magic-purple font-orbitron font-bold">
            - Dr. Stephen Strange
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;