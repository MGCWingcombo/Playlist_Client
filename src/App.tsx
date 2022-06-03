import React from "react";
import MbtiTest from "./Pages/MbtiTest/MbtiTest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Main/Home";
import "./App.css";
import Addlist from "./Pages/Addlist/Addlist";
import Endmbti from "./Pages/Endmbti/Endmbti";
import Question from "./Pages/Question/Question";
import GlobalStyle from "./Styles/GlobalStyle";
import GlobalFont from "./Styles/Font";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mbti" element={<MbtiTest />} />
          <Route path="mbti-test" element={<Question />} />
          <Route path="mbti-result" element={<Addlist />} />
          <Route path="recommend-list" element={<Endmbti />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
