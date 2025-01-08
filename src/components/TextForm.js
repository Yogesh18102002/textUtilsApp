import React, { useState } from "react";

export default function TextForm(props) {
  const [initialText, setInitialText] = useState("");

  function handleOnChange(event) {
    setInitialText(event.target.value);
    setText(event.target.value);
  }

  function handleUpperCase() {
    setText(text.toUpperCase());
  }

  function handleLowerCase() {
    setText(text.toLowerCase());
  }

  function handleCapitalizedCase() {
    setText(
      text
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")
    );
  }

  function handleDefault() {
    setText(initialText);
  }

  function clearText() {
    setText("")
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="mb-3">
        <div className="container mt-5">
          <h1 className={`text-${props.mode==='light'? 'dark':'light'}`}>{props.heading}</h1>
          <textarea
            value={text}
            id="exampleFormControlTextarea1"
            className={`form-control text-${props.mode==='light'?'#0c3134':'light'}`} 
            style={{ backgroundColor: props.mode === 'light' ? 'white' : '#0c3134' }}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handleUpperCase}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handleLowerCase}
          >
            Convert to LowerCase
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handleCapitalizedCase}
          >
            Convert to Capitalize Text
          </button>
          <button className="btn btn-primary mx-1 my-2" onClick={handleDefault}>
            Set to Default
          </button>
          <button className="btn btn-primary mx-1 my-2" onClick={clearText}>
            Clear
          </button>
          <h5 className={`text-${props.mode==='light'? 'dark':'light'}`}>Text Summary</h5>
          <p className={`text-${props.mode==='light'? 'dark':'light'}`}>
            {text.split(" ").length} words and {text.length} characters.
          </p>
          <h5 className={`text-${props.mode==='light'? 'dark':'light'}`}>Preview</h5>
          <p className={`text-${props.mode==='light'? 'dark':'light'}`}>
            {text.length>0 ? text : "Enter Your Text in above Description Box to Preview It Here !!!"}
          </p>
        </div>
      </div>
    </>
  );
}
