import React from "react";
import MbtiTest from "./Pages/MbtiTest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import Addlist from "./Pages/Addlist/Addlist";
import Endmbti from "./Pages/Endmbti/Endmbti";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="Addmbti" element={<Addlist />} />
          <Route path="mbti-test" element={<MbtiTest />} />
          <Route path="Addmbti/Endmbti" element={<Endmbti />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
