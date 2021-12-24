import React from "react";
import { Link } from "react-router-dom";
// import Addlist from "./Addlist/Addlist";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function navigateClick() {
    navigate("/Addmbti", { state: { id: 3 } });
  }

  return (
    <div>
      <h1>Home입니다.</h1>
      <button>
        <Link to="mbti-test">Mbti 1 </Link>
      </button>
      <button>
        <Link to="mbti-test">Mbti 2</Link>
      </button>
      <div onClick={navigateClick}>
        <button>enfp playlist 추가</button>
      </div>
    </div>
  );
};

export default Home;
