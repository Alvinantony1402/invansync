import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pos from "./Components/pos";
import About from "./Components/About";


import './App.css';
import HomePage from "./Components/HomePage.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="pos" element={<Pos/>} />
        <Route path="About" element={<About/>} />

        </Routes>
    </BrowserRouter>

      
    </div>
  );
}

export default App;
