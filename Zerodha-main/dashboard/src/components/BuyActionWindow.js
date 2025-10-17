import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ stockData }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(stockData?.price || 0.0);
  const [orderType, setOrderType] = useState("MARKET");
  const generalContext = useContext(GeneralContext);

  const totalValue = stockQuantity * stockPrice;
  const margin = totalValue * 0.2; // 20% margin

  const handleBuyClick = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:3003'}/newOrder`, {
        name: stockData?.uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      }, { withCredentials: true });
      alert(`Order placed: BUY ${stockQuantity} ${stockData?.uid} at ₹${stockPrice}`);
      generalContext.closeBuyWindow();
    } catch (error) {
      alert("Failed to place order. Make sure backend is running.");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true" style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1.5rem",
      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      zIndex: 1000,
      minWidth: "350px"
    }}>
      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{ margin: "0 0 0.5rem 0", color: "#333" }}>Buy {stockData?.uid}</h3>
        <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>Current Price: ₹{stockData?.price}</p>
      </div>
      
      <div className="regular-order">
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <fieldset style={{ flex: 1 }}>
            <legend>Order Type</legend>
            <select 
              value={orderType} 
              onChange={(e) => setOrderType(e.target.value)}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #ddd", borderRadius: "4px" }}
            >
              <option value="MARKET">Market</option>
              <option value="LIMIT">Limit</option>
            </select>
          </fieldset>
        </div>
        
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <fieldset style={{ flex: 1 }}>
            <legend>Quantity</legend>
            <input
              type="number"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #ddd", borderRadius: "4px" }}
            />
          </fieldset>
          <fieldset style={{ flex: 1 }}>
            <legend>Price (₹)</legend>
            <input
              type="number"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              disabled={orderType === "MARKET"}
              style={{ 
                width: "100%", 
                padding: "0.5rem", 
                border: "1px solid #ddd", 
                borderRadius: "4px",
                backgroundColor: orderType === "MARKET" ? "#f5f5f5" : "white"
              }}
            />
          </fieldset>
        </div>
        
        <div style={{ backgroundColor: "#f8f9fa", padding: "1rem", borderRadius: "4px", marginBottom: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span>Total Value:</span>
            <span>₹{totalValue.toFixed(2)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
            <span>Margin Required:</span>
            <span>₹{margin.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button 
          onClick={handleBuyClick}
          style={{
            flex: 1,
            padding: "0.75rem",
            backgroundColor: "#00d09c",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Buy
        </button>
        <button 
          onClick={handleCancelClick}
          style={{
            flex: 1,
            padding: "0.75rem",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BuyActionWindow;
