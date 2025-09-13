import { motion } from "framer-motion";

const Features = () => {
  const features = [
    { title: "Smart Insights", desc: "AI-powered insights to supercharge your workflow.", color: "text-spider-red" },
    { title: "AI Chatbot", desc: "Conversational assistant that learns and adapts.", color: "text-tech-blue" },
    { title: "Data Analytics", desc: "Visualize, analyze, and predict trends in real-time.", color: "text-magic-purple" },
    { title: "Secure Cloud", desc: "End-to-end encryption with scalable cloud support.", color: "text-gradient-spider" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-orbitron font-black text-gradient-spider glow-spider mb-12"
        >
          FEATURES
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-foreground/20 shadow-lg hover:shadow-xl transition"
            >
              <h3 className={`text-2xl font-orbitron font-bold mb-3 ${f.color}`}>
                {f.title}
              </h3>
              <p className="text-lg font-exo text-foreground/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
