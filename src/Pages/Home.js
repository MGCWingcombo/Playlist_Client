import React from "react";
import { Link } from "react-router-dom";
import Addlist from "./Addlist/Addlist";

const Home = () => {
  return (
    <div>
      <h1>Home입니다.</h1>
      <button>
        <Link to="mbti">Mbti 1 </Link>
      </button>
      <button>
        <Link to="mbti">Mbti 2</Link>
      </button>
      <button>
        <Link to="mbti">Mbti 3</Link>
      </button>

      <Link to="Addmbti">playlist 추가</Link>
    </div>
  );
};

export default Home;
