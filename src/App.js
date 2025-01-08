import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

  const [mode, setMode] = React.useState('light')

  const toggleMode = ()=> {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0c3134';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Navbar  title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    </>
  );
}

export default App; 
