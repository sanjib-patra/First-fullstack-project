import { NavLink } from "react-router";
import { Logout } from "./Logout";
import { useState } from "react";
import { About } from "./About";

function Navbar1() {
  const [open, setOpen] = useState(false);

  // Wrapper to close dropdown when logout is clicked
  const handleLogoutClick = () => {
    setOpen(false); // close menu
  };

  return (
    <div
      style={{
        border: "2px solid transparent",
        borderRadius: "10px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        minWidth: "95vw",
        margin: "20px auto",
        padding: "10px",
        boxShadow: `
          5px 5px 10px rgba(0,0,255,0.3),   /* right shadow */
          -5px 5px 10px rgba(255,0,0,0.3),  /* left shadow */
          0 5px 15px rgba(255,0,0,0.3),     /* bottom shadow red */
          0 5px 15px rgba(0,0,255,0.3)      /* bottom shadow blue */
        `,
      }}
    >
      {/* Left: Logo + Title */}
      <div style={{ display: "flex", width: "30%" }}>
        <img
          style={{
            height: "70px",
            display: "inline-block",
            filter: "brightness(0) invert(1)",
          }}
          src="/logo.png"
          alt="Logo"
        />
        <h1
          style={{
            marginTop: "15px",
            rowGap: "10px",
            color: "pink",
            fontFamily: "Pacifico, cursive",
            fontSize: "25px",
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
           Quiz Master
        </NavLink>
          
        </h1>
      </div>

      {/* Right: Links + Dropdown */}
      <div
        style={{
          display: "flex",
          marginTop: "25px",
          width: "70%",
          justifyContent:"flex-end",
          textDecoration: "none",
          position: "relative",
          marginLeft:"30px",
          gap:"10%"
        }}
      >
        {/* <NavLink to="/" style={{ color: "blue", textDecoration: "none" }}>
          Home
        </NavLink> */}
        <NavLink to="/Login" style={{ color: "blue", textDecoration: "none" }}>
          Login
        </NavLink>
        <NavLink
          to="/Register"
          style={{ color: "blue", textDecoration: "none" }}
        >
          Register
        </NavLink>

        {/* Dropdown Menu */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "transparent",
              border: "none",
              color: "blue",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Menu ▾
          </button>

          {open && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "100%",
                backgroundColor: "black",
                 border: "2px solid transparent",
                borderRadius: "5px",
                padding: "10px",
                zIndex: 1000,
                minWidth: "120px",
                boxShadow: "0 0 8px red, 0 0 15px blue",
              }}
            >
              {/* Wrap Logout with onClick to close menu */}
              <div onClick={handleLogoutClick}>
                <Logout />
              </div>


                 <div onClick={handleLogoutClick}>
                <NavLink to="/About" style={{color:"blue"}}>About</NavLink>
              </div>


              <div onClick={handleLogoutClick}>
                <NavLink to="/History" style={{color:"blue"}}>History</NavLink>
              </div>

<div onClick={handleLogoutClick}>
                <NavLink to="/Feedback" style={{color:"blue"}}>Feedback</NavLink>
              </div>


            </div>


          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
