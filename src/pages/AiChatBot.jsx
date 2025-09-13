import { useState } from "react";
import { motion } from "framer-motion";

const AiChatBot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! I’m your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }, { from: "bot", text: "🤖 Processing your request..." }]);
    setInput("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-3xl w-full mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-6xl md:text-7xl font-orbitron font-black text-magic-purple glow-magic mb-12"
        >
          AI CHATBOT
        </motion.h2>

        {/* Chat Window */}
        <div className="bg-card/70 backdrop-blur-md rounded-2xl border border-foreground/20 shadow-lg p-6 h-[500px] flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.from === "user" ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`p-3 rounded-lg max-w-xs ${
                  msg.from === "user"
                    ? "ml-auto bg-gradient-to-r from-spider-red to-magic-purple text-white"
                    : "mr-auto bg-gradient-to-r from-tech-blue to-magic-purple text-white"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-foreground/30 bg-background/50 text-foreground focus:outline-none"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="px-6 py-2 rounded-lg bg-gradient-spider text-white font-orbitron font-bold hover:opacity-90 transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiChatBot;
