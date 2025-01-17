// FileName: App.js
import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Tracker from "./components/Tracker";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => (props.darkMode ? "#333" : "#f8f9fa")};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  transition: background-color 0.3s, color 0.3s;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Navbar />
      <Main darkMode={darkMode}>
        <div className="container">
          <div className="d-flex justify-content-end">
            <button
              className={`btn btn-${darkMode ? "light" : "dark"} mb-3`}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <Tracker darkMode={darkMode} />
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default App;