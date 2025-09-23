import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const advantages = [
    {
      title: "Unlimited quiz generation",
      desc: `Generate as many quizzes as you want without any limits or hidden restrictions. 
      This ensures that you always have fresh sets of questions to practice. 
      Whether you want quick practice before an exam or long sessions for revision, 
      unlimited generation keeps you engaged and well-prepared.`,
    },
    {
      title: "Instant scoring & history tracking",
      desc: `Get immediate feedback on your answers as soon as you submit a quiz. 
      Your scores are saved automatically, allowing you to track your performance over time. 
      With detailed history tracking, you can analyze your strengths and weaknesses 
      and focus on the areas that need more attention.`,
    },
    {
      title: "User-friendly interface",
      desc: `Our platform is designed with simplicity in mind, making it easy for anyone to use. 
      Clean layouts, smooth navigation, and responsive design ensure a seamless experience. 
      You don’t need to worry about complicated menus or clutter — just focus on learning 
      while enjoying a modern and intuitive interface.`,
    },
    {
      title: "Topic-based custom quizzes",
      desc: `Choose your preferred subject or topic and instantly generate quizzes tailored to it. 
      This allows you to study more effectively by focusing only on what matters to you. 
      By targeting specific topics, you can save time, strengthen weak areas, 
      and achieve better results in exams or competitions.`,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        <h5
          style={{
            marginTop: "13px",
            rowGap: "10px",
            color: "pink",
            fontFamily: "Pacifico, cursive",
            display: "inline-block",
          }}
        >
          Quiz Master
        </h5>
      </h1>
      <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-300">
        We provide a powerful platform where you can generate unlimited quizzes,
        track your scores, and improve your learning journey.
      </p>

      <div className="max-w-3xl mx-auto space-y-6">
        {advantages.map((adv, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-gray-900 cursor-pointer"
            style={{
              boxShadow:
                "0 0 10px rgba(255,0,0,0.6), 0 0 15px rgba(0,0,255,0.6)",
            }}
          >
            {/* Card Header */}
            <div
              onClick={() =>
                setOpenIndex(openIndex === idx ? null : idx)
              }
              className="p-6 flex justify-between items-center"
            >
              <h2 className="text-xl font-semibold">{adv.title}</h2>
              <span className="text-gray-400">
                {openIndex === idx ? "▲" : "▼"}
              </span>
            </div>

            {/* Expandable Section */}
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 border-t border-gray-700 text-gray-300 leading-relaxed">
                    {adv.desc}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
