import React from "react";
import { useState, useEffect } from "react";
import "./Nav.css";
export const Nav = () => {
  const [showNavBarTrans, SetShowNavBarTrans] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      SetShowNavBarTrans(true);
    } else {
      SetShowNavBarTrans(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${showNavBarTrans && "nav__black"}`}>
      <div className="nav__contents">
        <p className="nav__logo">MovieFlix</p>
        <img
          className="nav__avatar"
          src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png"
          alt="movieflix avatar"
        />
      </div>
    </div>
  );
};
