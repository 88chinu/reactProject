import React, { createContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "../api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing token and auto-login the user
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Decode token and fetch user data (optional)
      setUser({ token }); // Replace with a decoded token or user object if required
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await loginUser({ email, password });
      const { token, user } = response.data;

      localStorage.setItem("authToken", token);
      setUser(user);
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error; // Handle errors in the UI if needed
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await registerUser({ name, email, password });
      const { token, user } = response.data;

      localStorage.setItem("authToken", token);
      setUser(user);
    } catch (error) {
      console.error("Registration failed:", error.message);
      throw error; // Handle errors in the UI if needed
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;
