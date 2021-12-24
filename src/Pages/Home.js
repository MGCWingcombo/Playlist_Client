import React from "react";
import { Link } from "react-router-dom";
// import Addlist from "./Addlist/Addlist";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function navigateClick() {
    navigate("/Addmbti", { state: { id: 1 } });
  }
  function navigateClick2() {
    navigate("/Addmbti", { state: { id: 2 } });
  }
  function navigateClick3() {
    navigate("/Addmbti", { state: { id: 3 } });
  }
  function onAir() {
    console.log("hi");
  }

  return (
    <div>
      <h1 onClick={onAir}>Home입니다.</h1>

      <button onClick={navigateClick}>
        <div>enfp playlist 추가 id 1</div>
      </button>
      <button onClick={navigateClick2}>
        <div>enfp playlist 추가 id 2</div>
      </button>
      <div onClick={navigateClick3}>
        <button>enfp playlist 추가 id 3</button>
      </div>
    </div>
  );
};

export default Home;
