import React, { useState } from "react";
import axios from "axios"

import { useNavigate } from "react-router";

export default function Register() {
    let navigate=useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
  const res=await axios.post("https://first-fullstack-project-pzek.onrender.com/User/Register",
      {
        UserName:name,
        email:email,
        password:password
      },{ withCredentials: true })   
    alert(res.data.message);
    navigate("/Login")
    }catch(error){
      alert(error.response.data.message);  
    }
  
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:"balck", 
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
          borderRadius: "15px",
          background: "black",
 boxShadow: "0 0 8px red, 0 0 15px blue",
    transition: "box-shadow 0.3s ease-in-out",
          width: "300px",
          gap: "15px",
          color: "white",
          backdropFilter: "blur(8px)" // 👈 gives a nice frosted-glass effect
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Register ✨</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
          }}
          required
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
          }}
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
          }}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
           background: "linear-gradient(to right, #ff4d4d, #4d79ff)",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
// #070356ff, #f09819