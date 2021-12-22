import React from "react";
import MbtiTest from "./Pages/MbtiTest";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import Addlist from "./Pages/Addlist/Addlist";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="mbtiAdd" element={<Addlist />} />
          <Route path="mbti/*" element={<MbtiTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
