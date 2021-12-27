import React from "react";
import MbtiTest from "./Pages/MbtiTest/MbtiTest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import Addlist from "./Pages/Addlist/Addlist";
import Endmbti from "./Pages/Endmbti/Endmbti";
import MBTI_btn from "./Components/Func/MBTI_btn";
import Question from "./Pages/Question/Question";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<MBTI_btn />} />
          <Route path="Addmbti" element={<Addlist />} />
          <Route path="mbti-test" element={<MbtiTest />} />
          <Route path="Addmbti/Endmbti" element={<Endmbti />} />
          <Route path="mbti-test/question" element={<Question />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
