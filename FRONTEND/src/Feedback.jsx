import { useState } from "react";
import axios from "axios";

export function Feedback() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    experience: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/User/Feedback", form, { withCredentials: true });
      alert("✅ Feedback submitted successfully!");
      setForm({ name: "", email: "", experience: "" });
    } catch (err) {
      console.error("Feedback error:", err);
      alert("❌ Failed to submit feedback. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-2xl w-full max-w-md border border-red-500"
        style={{
          backgroundColor: "black", // form background full black
          boxShadow: `
            0 0 15px rgba(255, 0, 0, 0.7),
            0 0 25px rgba(0, 0, 255, 0.6),
            0 0 40px rgba(255, 0, 0, 0.5),
            0 0 60px rgba(0, 0, 255, 0.4)
          `,
        }}
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Feedback Form
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
        />
        <textarea
          name="experience"
          placeholder="Share your experience"
          value={form.experience}
          onChange={handleChange}
          required
          rows="4"
          className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold hover:scale-105 transition-transform"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
