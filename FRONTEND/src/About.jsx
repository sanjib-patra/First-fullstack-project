import { motion } from "framer-motion";

function About() {
  const services = [
    {
      title: "Custom Quizzes",
      description:
        "Choose your favorite topic, set difficulty level, and decide how many questions you want.",
    },
    {
      title: "Difficulty Levels",
      description:
        "Challenge yourself with Easy, Medium, or Hard questions and grow step by step.",
    },
    {
      title: "Track Progress",
      description:
        "Monitor your improvement over time with performance tracking and score history.",
    },
    {
      title: "Fun & Engaging",
      description:
        "Boost your knowledge while enjoying an interactive and fun quiz experience.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>About <h5 style={{ marginTop: "13px", rowGap: "10px",color:"pink",fontFamily:"Pacifico, cursive",display:"inline-block"}}>Quiz Master</h5></h1>
      <p style={{ maxWidth: "800px", margin: "0 auto 40px auto", fontSize: "18px", lineHeight: "1.6" }}>
        QuizMaster is an interactive platform where you can create and attempt
        quizzes based on your own choice of topic, difficulty, and number of
        questions. Learn, test yourself, and have fun while tracking your
        progress.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: "black",
              padding: "20px",
              borderRadius: "12px",
              border: "2px solid blue",
              boxShadow: "0 4px 10px rgba(255,0,0,0.3), 0 4px 10px rgba(0,0,255,0.3)",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(255,0,0,0.4), 0 8px 20px rgba(0,0,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 10px rgba(255,0,0,0.3), 0 4px 10px rgba(0,0,255,0.3)";
            }}
          >
            <h2 style={{ marginBottom: "10px", fontSize: "22px" }}>
              {service.title}
            </h2>
            <p style={{ fontSize: "16px", color: "lightgray" }}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export {About};
