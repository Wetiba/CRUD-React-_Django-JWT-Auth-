import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token"));
  const [showRegister, setShowRegister] = useState(false);

  if (!isAuthenticated) {
    return showRegister ? (
        <Register onRegistered={() => setShowRegister(false)} />
    ) : (
        <div>
          <Login onLogin={() => setIsAuthenticated(true)} />
          <p style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <button onClick={() => setShowRegister(true)}>Register</button>
          </p>
        </div>
    );
  }

  return <Dashboard onLogout={() => setIsAuthenticated(false)} />;
}

export default App;
