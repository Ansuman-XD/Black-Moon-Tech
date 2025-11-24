import React, { useState } from "react";
import "./AuthModal.css";

const AuthModal = ({ show, onClose, setUser }) => {
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  // ---------- GOOGLE LOGIN ----------
  const handleGoogleLogin = () => {
    setLoading(true);

    google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID",
      callback: (response) => handleGoogleResponse(response),
    });

    google.accounts.id.prompt();
  };

  const handleGoogleResponse = (response) => {
    const user = parseJwt(response.credential);

    setUser(user);
    setLoading(false);
    onClose();
  };

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  // ---------- APPLE LOGIN ----------
  const handleAppleLogin = () => {
    setLoading(true);

    AppleID.auth.init({
      clientId: "YOUR_APPLE_SERVICE_ID",
      scope: "name email",
      redirectURI: "https://yourdomain.com",
      usePopup: true
    });

    AppleID.auth
      .signIn()
      .then((data) => {
        const user = {
          name: data?.user?.name?.firstName || "Apple User",
          email: data?.user?.email
        };

        setUser(user);
        setLoading(false);
        onClose();
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="auth-overlay">
      <div className="auth-container">

        {/* CLOSE BUTTON */}
        <button className="close-btn" onClick={onClose}>×</button>

        <h2 className="auth-title">Log in to Get Started</h2>

        <div className="auth-social">

          {/* GOOGLE BUTTON */}
          <button
            className={`social-btn google ${loading ? "disabled" : ""}`}
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            {loading ? (
              <div className="spinner"></div>
            ) : (
              <>
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="icon"
                />
                Continue with Google
              </>
            )}
          </button>

          {/* APPLE BUTTON */}
          <button
            className={`social-btn apple ${loading ? "disabled" : ""}`}
            onClick={handleAppleLogin}
            disabled={loading}
          >
            {loading ? (
              <div className="spinner"></div>
            ) : (
              <>
                <img
                  src="https://www.svgrepo.com/show/475656/apple-black.svg"
                  className="icon"
                />
                Continue with Apple
              </>
            )}
          </button>

        </div>

      </div>
    </div>
  );
};

export default AuthModal;
