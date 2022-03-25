import React from "react";
import MbtiTest from "./Pages/MbtiTest/MbtiTest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Main/Home";
import "./App.css";
import Addlist from "./Pages/Addlist/Addlist";
import Endmbti from "./Pages/Lastpage/Endmbti";
import MBTI_btn from "./Components/Func/MBTI_btn";
import Question from "./Pages/Question/Question";
import Test from "./Pages/test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mbti" element={<MbtiTest />} />
          <Route path="mbti-test" element={<Question />} />
          <Route path="mbti-result" element={<Addlist />} />
          <Route path="recommend-list" element={<Endmbti />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
