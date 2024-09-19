import React, { useState } from "react"

function WordLetterCount(){
        const [text, setText] = useState("") 
        const wordCount = text .split(/\s+/) //split the word
        .filter(Boolean).length; //count the word 

        const letterCount = text.length; //count the letter
      
        const handleTextChange = (e) => { 
            setText(e.target.value)
        }
    return(
        <div>
            <textarea placeholder= "Type anything you want here..."
                onChange={handleTextChange} //handle the event
              value={text} rows={10} cols={70} //captior user input from this state
              />
             <p> 
                Word Count: {wordCount} 
            </p> 
            <p> 
                Letter Count: {letterCount} 
            </p> 
        </div>
    )
}

export default WordLetterCount