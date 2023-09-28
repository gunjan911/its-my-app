import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// App.js





function App() {
  const [mode, setmode] = useState("light"); // wether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#101b44";
      showAlert("Dark mode has be enable", "success");
      document.title = " Textutiles - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has be enable", "success");
      document.title = " Textutiles - light Mode";
    }
  };
  return (
    <>
      
        <Navbar title="Textutiles2" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />         
        <div className="container my-3">       
                <Routes>                                     
                   <Route path="/" element={<TextForm heading="Enter your text to Analyze" mode={mode} showAlert={showAlert} /> } />
                   <Route path="/about" element={<About/>} /> 
                </Routes>     
         </div>
      
    </>
  );
}

export default App;
