import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = ({ onLogout, user }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem",marginRight:"2rem" }}>
        <img src="logo.png" style={{ width: "50px" }} />
        <small style={{ fontSize: "0.7rem", color: "#666" }}>by Rohan</small>
      </div>
      <div className="menus">
        <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, gap: "1rem" }}>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          {user && <span style={{ marginRight: "0.5rem", fontSize: "0.9rem" }}>Welcome</span>}
          <div className="avatar">RB</div>
          <p className="username">{user ? user.username : "Rohan"}</p>
          {isProfileDropdownOpen && (
            <div style={{
              position: "absolute",
              top: "100%",
              right: 0,
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "0.5rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}>
              <button 
                onClick={onLogout}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#d32f2f"
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
