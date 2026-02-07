import React, { useState } from "react";
import "./wordLetterCounter.css"; 

function WordLetterCount() {
  const [text, setText] = useState("");

  const wordCount = text
    .split(/\s+/)
    .filter(Boolean).length;

  const letterCount = text.length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div>
      <textarea
        placeholder="Type anything you want here..."
        onChange={handleTextChange}
        value={text}
        rows={10}
        cols={70}
      />

      <br />

      <button onClick={handleClear}>Clear</button>

      <p>Word Count: {wordCount}</p>
      <p>Letter Count: {letterCount}</p>
    </div>
  );
}

export default WordLetterCount;
