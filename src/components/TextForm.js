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

  const [text, setText] = useState("");

  return (
    <>
      <div className="mb-3">
        <div className="container mt-5">
          <h1>{props.heading}</h1>
          <textarea
            value={text}
            id="exampleFormControlTextarea1"
            className="form-control"
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
          <h5>Text Summary</h5>
          <p>
            {text.split(" ").length} words and {text.length} characters.
          </p>
        </div>
      </div>
    </>
  );
}
