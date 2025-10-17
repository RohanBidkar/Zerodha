import React, { useState, useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import Login from "./Login";
import Signup from "./Signup";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:3003'}/user`, { withCredentials: true })
      .then(res => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleSignup = (userData) => {
    setUser(userData);
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:3003'}/logout`, {}, { withCredentials: true });
    } catch (error) {
      console.log("Logout error:", error);
    }
    setUser(null);
  };

  if (loading) return <div>Loading...</div>;
  
  if (!user) {
    return showSignup ? (
      <Signup 
        onSignup={handleSignup} 
        onSwitchToLogin={() => setShowSignup(false)} 
      />
    ) : (
      <Login 
        onLogin={handleLogin} 
        onSwitchToSignup={() => setShowSignup(true)} 
      />
    );
  }

  return (
    <>
      <TopBar user={user} onLogout={handleLogout} />
      <Dashboard />
    </>
  );
};

export default Home;
