import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export function History() {
  const [history, setHistory] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  // Fetch user history
  useEffect(() => {
    async function fetchHistory() {
      try {
        const res = await axios.get("/User/History",{ withCredentials: true });
        setHistory(res.data.history || []);
      } catch (err) {
        console.error("Error fetching history:", err);
      }
    }
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Your Quiz History
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {history.map((attempt, idx) => (
          <div
            key={attempt._id || idx}
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
              <div>
                <h2 className="text-xl font-semibold">
                  Topic: {attempt.Topic}
                </h2>
                <p className="text-sm mt-1 text-gray-400">
                  Click to see {attempt.question?.length} question
                  {attempt.question?.length > 1 ? "s" : ""}
                </p>
              </div>
              <span className="text-lg font-semibold">
                Score:{" "}
                <span className="text-green-400">{attempt.Score}</span>
              </span>
            </div>

            {/* Expandable Q&A Section */}
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 border-t border-gray-700">
                    <h3 className="text-lg font-semibold mb-3">
                      Questions & Answers
                    </h3>
                    {attempt.question?.map((q, i) => {
                      const userAns = attempt.UserAnswer?.[i];
                      const correctAns = attempt.Questionanswer?.[i];
                      const isCorrect = userAns === correctAns;

                      return (
                        <div
                          key={i}
                          className="mb-4 p-3 rounded-lg bg-gray-800"
                        >
                          <p className="font-medium">Q{i + 1}: {q}</p>
                          <p className="text-green-300 mt-1">
                            Correct Answer: {correctAns}
                          </p>
                          <p
                            className={`mt-1 ${
                              isCorrect ? "text-green-400" : "text-red-400"
                            }`}
                          >
                            Your Answer: {userAns || "Not Answered"}
                          </p>
                        </div>
                      );
                    })}
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








