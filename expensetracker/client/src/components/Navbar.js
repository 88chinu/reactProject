import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

// Navbar with gradient background
const NavBarContainer = styled.nav`
  background: linear-gradient(to right, #50cc38, #4cf32c); // Gradient background
  padding: 10px 20px;
`;

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <NavBarContainer className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark" : "navbar-light"}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          Expense Tracker
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Dark Mode Toggle Button with Icon */}
        <button
          className={`btn ${darkMode ? "btn-light" : "btn-dark"} btn-sm`}
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </NavBarContainer>
  );
};

export default Navbar;
