import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Btn from './Btn';

const MbtiTest = () => {

    

    

    return (
        <>
            <Btn id={1} />
            <Btn id={2} />
            <Btn id={3} />
            
            
            {/* <ul>
            {mbtis.map(mbti => (
                <li key={mbti.id}>
                {mbti.userid} ({mbti.title})
                </li>
            ))}
            </ul> */}
        </>
    );
};

export default MbtiTest;