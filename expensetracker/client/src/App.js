import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Tracker from "./components/Tracker";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Global styled component to manage dark mode styles
const AppContainer = styled.div`
  background-color: ${(props) => (props.darkMode ? "#333" : "#f8f9fa")};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  min-height: 100vh;
  transition: background-color 0.3s, color 0.3s;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AppContainer darkMode={darkMode}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container">
        <Tracker darkMode={darkMode} />
      </div>
      <Footer />
    </AppContainer>
  );
};

export default App;
