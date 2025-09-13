import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    { step: "01", title: "Sign Up", desc: "Create your account and join the network." },
    { step: "02", title: "Customize", desc: "Set preferences and train your AI assistant." },
    { step: "03", title: "Engage", desc: "Chat, analyze, and collaborate in real-time." },
    { step: "04", title: "Grow", desc: "Leverage insights to boost your growth journey." },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-6xl md:text-7xl font-orbitron font-black text-tech-blue glow-magic mb-16"
        >
          HOW IT WORKS
        </motion.h2>

        <div className="space-y-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              <div className="text-6xl font-orbitron font-black text-gradient-spider">{s.step}</div>
              <div className="bg-card/50 p-6 rounded-xl border border-foreground/20 shadow-lg flex-1">
                <h3 className="text-2xl font-orbitron font-bold mb-2 text-spider-red">{s.title}</h3>
                <p className="text-lg font-exo text-foreground/80">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
