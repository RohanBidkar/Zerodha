import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
          style={{ cursor: "pointer", maxWidth: "100%", height: "auto" }}
        />
        </a>
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
