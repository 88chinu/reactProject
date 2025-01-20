import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Tracker from "./components/Tracker";
import Login from "./components/Login";
import Register from "./components/Register";
import Reports from "./components/Reports";
import ExportImport from "./components/ExportImport";
import { AuthProvider } from "./context/AuthContext";
import GlobalStyles from "./globalStyles";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Tracker />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/export-import" element={<ExportImport />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
