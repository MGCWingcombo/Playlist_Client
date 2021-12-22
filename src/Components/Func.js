import React from 'react';
import dummy from "../db/data.json"

const Func = () => {

    const recommend = mbti => {
        console.log(mbti);
        if(mbti == "enfp")
        {
            console.log("enfp의 플레이리스트입니다.");
        }
        else if(mbti == "enfj")
        {
            console.log("enfj의 플레이리스트입니다.");
        }
        else if(mbti == "entp")
        {
            console.log("entp의 플레이리스트입니다.");
        }
        else if(mbti == "entj")
        {
            console.log("entj의 플레이리스트입니다.");
        }
    }
    
    

    return (
        <div>
           <button className="enfp" onClick={() => recommend("enfp")} >enfp</button>
           <button className="enfj" onClick={() => recommend("enfj")} >enfj</button>
           <button className="entp" onClick={() => recommend("entp")} >entp</button>
           <button className="entj" onClick={() => recommend("entj")} >entj</button>
            <ul className="mbtis">
                {dummy.mbtis.map((mbti) => (
                    <li key={mbti.id}>
                    mbti : {mbti.mbti}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Func;