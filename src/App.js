import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/home';
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Projects from "./Pages/projects";
import Quran from "./Components/projects/1";
import Move from "./Components/projects/2";
import Weather from "./Components/projects/3";
import Rock from "./Components/projects/4";
import Etch from "./Components/projects/5";
import Comment from "./Components/projects/6";
import Clock from "./Components/projects/7";
import Delivery from "./Components/projects/8";
import Calculator from "./Components/projects/9";
import Temperature from "./Components/projects/10";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/projects/quranapp" element={<Quran />}/>
            <Route path="/projects/moveitapp" element={<Move />}/>
            <Route path="/projects/weatherapp" element={<Weather/>}/>
            <Route path="/projects/rock-paper-scissors" element={<Rock/>}/>
            <Route path="/projects/etchasketch" element={<Etch />}/>
            <Route path="/projects/commentapp" element={<Comment />}/>
            <Route path="/projects/digitalclock" element={<Clock />}/>
            <Route path="/projects/deliveryapp" element={<Delivery />}/>
            <Route path="/projects/calculatorapp" element={<Calculator />}/>
            <Route path="/projects/temperatureapp" element={<Temperature />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
