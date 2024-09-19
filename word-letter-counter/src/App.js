import React from 'react';
import './App.css';
import WordLetterCount from './wordLetterCounter';

function App() {
  return (
    <div className="App">
      <h1 id="top"> FIRST PROGRAM IN REACT </h1> 
      <h2> Words and Letters Counter </h2> 
            <WordLetterCount />
    </div>
  );
}

export default App;
