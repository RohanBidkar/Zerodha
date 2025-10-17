import React from "react";

function Signup() {
    const handleRedirectToDashboard = () => {
        // Replace with your actual dashboard URL from Vercel
        window.location.href = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3000";
    };

    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Open your Zerodha account</h1>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button 
                onClick={handleRedirectToDashboard}
                style={{
                    padding: "1rem 2rem",
                    backgroundColor: "#387ed1",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    marginTop: "1rem"
                }}
            >
                Sign up for free
            </button>
        </div>
    );
}

export default Signup;