import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {

  const [mode, setMode] = React.useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0c3134';
      raiseAlert("success", "Dark Mode Enabled !")
    } 
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      raiseAlert("success", "Light Mode Enabled !")
    }
  }

  const [alert, setAlert] = React.useState(null)
  const raiseAlert = (alertType, alertMessage)=> { 
    setAlert({
      type : alertType,
      msg : alertMessage
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <TextForm heading="Enter the text to analyze" mode={mode} alert={raiseAlert}/>
    </>
  );
}

export default App; 
