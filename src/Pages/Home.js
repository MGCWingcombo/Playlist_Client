import React from 'react';
import {Link} from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h1>Home입니다.</h1>
            <Link to="mbti">MbtiTest 받기</Link>
            <Link to="mbtiAdd">playlist 추가</Link>
        </div>
    );
};

export default Home;