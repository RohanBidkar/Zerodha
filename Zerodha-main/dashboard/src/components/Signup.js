import React, { useState } from "react";
import axios from "axios";

const Signup = ({ onSignup, onSwitchToLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:3003'}/signup`, {
        username,
        password,
      });
      if (response.data.success) {
        onSignup(response.data.user);
      }
    } catch (err) {
      setError("Signup failed or user already exists");
    }
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh",
      backgroundColor: "#f8f9fa"
    }}>
      <form onSubmit={handleSubmit} style={{
        padding: "2rem",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        width: "300px"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Sign Up</h2>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ddd",
              borderRadius: "4px"
            }}
            required
          />
        </div>
        
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ddd",
              borderRadius: "4px"
            }}
            required
          />
        </div>
        
        <div style={{ marginBottom: "1.5rem" }}>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ddd",
              borderRadius: "4px"
            }}
            required
          />
        </div>
        
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "#387ed1",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "1rem"
          }}
        >
          Sign Up
        </button>
        
        <p style={{ textAlign: "center", margin: 0 }}>
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToLogin}
            style={{
              background: "none",
              border: "none",
              color: "#387ed1",
              cursor: "pointer",
              textDecoration: "underline"
            }}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Signup;