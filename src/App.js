import React from "react";
import MbtiTest from "./Pages/MbtiTest/MbtiTest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Main/Home";
import "./App.css";
import Addlist from "./Pages/Addlist/Addlist";
import Endmbti from "./Pages/Lastpage/Endmbti";
import Question from "./Pages/Question/Question";
import GlobalStyle from "./styleds/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mbti" element={<MbtiTest />} />
          <Route path="mbti-test" element={<Question />} />
          <Route path="mbti-result" element={<Addlist />} />
          <Route path="recommend-list" element={<Endmbti />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
