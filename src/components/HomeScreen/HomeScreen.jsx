import React from "react";
import "./HomeScreen.css";
import { Nav } from "../Nav/Nav";
import { Banner } from "../Banner/Banner";

export const HomeScreen = () => {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
    </div>
  );
};
