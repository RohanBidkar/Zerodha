import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Hero() {
  useEffect(() => {
    // Ping backend to keep Render service awake
    const pingBackend = async () => {
      try {
        await fetch(process.env.REACT_APP_API_URL || 'http://localhost:3003');
      } catch (error) {
        // Silent fail - don't interfere with frontend
      }
    };
    
    pingBackend();
  }, []);

  const handleRedirectToDashboard = () => {
    window.open(process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3000", "_blank");
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <a href={process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3000"} target="_blank" rel="noopener noreferrer">
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
          onClick={handleRedirectToDashboard}
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
