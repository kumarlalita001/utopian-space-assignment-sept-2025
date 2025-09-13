import { motion } from "framer-motion";
import spiderHeroImage from "../../assets/spiderman-hero.jpg";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src={spiderHeroImage}
            alt="About Us"
            className="rounded-2xl border-4 border-spider-red shadow-spider"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-spider opacity-20 animate-pulse" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-black text-gradient-spider glow-spider mb-6">
            ABOUT US
          </h2>
          <p className="text-lg font-exo text-foreground/80 leading-relaxed mb-4">
            We’re on a mission to blend cutting-edge AI with stunning design. 
            Our platform empowers developers, creators, and innovators to 
            collaborate with futuristic tools inspired by heroes & legends.
          </p>
          <p className="text-lg font-exo text-foreground/80 leading-relaxed">
            From AI chatbots to smart insights, we craft experiences that feel 
            magical, powerful, and human-centered.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
