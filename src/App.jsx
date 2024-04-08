import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Navbar /> */}
        <Route path="/" element={< Home/>}></Route>
        <Route path="/about" element={< About/>}></Route>
        {/* < Home /> */}
        {/* <About /> */}
      </Routes>
    </Router>
  );
}

export default App;
