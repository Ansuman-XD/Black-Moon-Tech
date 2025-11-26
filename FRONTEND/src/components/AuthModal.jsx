// AuthModal.jsx
import React, { useState, useEffect } from "react";
import "./AuthModal.css";

const AuthModal = ({ show, onClose, setUser }) => {
  const [mode, setMode] = useState("login"); // login | register
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (!show) {
      setMode("login");
      setEmail("");
      setPassword("");
      setName("");
      setLoading(false);
    }
  }, [show]);

  if (!show) return null;

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const url =
        mode === "login"
          ? `${import.meta.env.VITE_API_URL}/auth/login`
          : `${import.meta.env.VITE_API_URL}/auth/register`;

      const body =
        mode === "register"
          ? { name, email, password }
          : { email, password };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
        onClose();
      } else {
        alert(data.message || "Failed");
      }
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="auth-overlay">
      <div className="auth-container">

        <button className="close-btn" onClick={onClose}>×</button>

        <h2 className="auth-title">
  {mode === "login" ? "Welcome Back to Black Moon" : "Join the Black Moon Community"}
</h2>


        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab ${mode === "login" ? "active" : ""}`}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            className={`tab ${mode === "register" ? "active" : ""}`}
            onClick={() => setMode("register")}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <div className="auth-form">
          {mode === "register" && (
            <input
              className="input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
          )}

          <input
            className="input"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />

          <button
            className="primary-btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Please wait..." : mode === "login" ? "Login" : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
