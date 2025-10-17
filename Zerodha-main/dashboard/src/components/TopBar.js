import React, { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "./Menu";

const TopBar = ({ user, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.5rem 1rem",
      backgroundColor: "#fff",
      borderBottom: "1px solid #eee",
      position: "relative",
      minHeight: "60px"
    }}>
      <div className="market-indices" style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        flexWrap: "wrap"
      }}>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <span style={{ fontSize: "0.9rem", fontWeight: "bold" }}>NIFTY</span>
          <span style={{ color: "green", fontSize: "0.9rem" }}>22,100</span>
          <span style={{ color: "green", fontSize: "0.8rem" }}>+0.5%</span>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <span style={{ fontSize: "0.9rem", fontWeight: "bold" }}>SENSEX</span>
          <span style={{ color: "green", fontSize: "0.9rem" }}>73,100</span>
          <span style={{ color: "green", fontSize: "0.8rem" }}>+0.3%</span>
        </div>
      </div>
      
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: "1.2rem",
            cursor: "pointer"
          }}
        >
          ☰
        </button>
        <Menu onLogout={onLogout} user={user} />
      </div>
      
      {isMobileMenuOpen && (
        <div className="mobile-dropdown" style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          backgroundColor: "white",
          border: "1px solid #ddd",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          zIndex: 1000,
          display: "none"
        }}>
          <div style={{ padding: "1rem" }}>
            <Link to="/" style={{ display: "block", padding: "0.5rem", textDecoration: "none", color: "#333" }}>Dashboard</Link>
            <Link to="/orders" style={{ display: "block", padding: "0.5rem", textDecoration: "none", color: "#333" }}>Orders</Link>
            <Link to="/holdings" style={{ display: "block", padding: "0.5rem", textDecoration: "none", color: "#333" }}>Holdings</Link>
            <Link to="/positions" style={{ display: "block", padding: "0.5rem", textDecoration: "none", color: "#333" }}>Positions</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;