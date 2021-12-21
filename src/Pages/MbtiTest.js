import React, {useState, useEffect} from 'react';
import axios from 'axios';

const MbtiTest = () => {

    const [mbtis, setMbtis] = useState(null);
    const [error, setError] = useState(null);

    
    

    const holder = async () => {
        try {
            setError(null);
            setMbtis(null);
            await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_end=5')
            .then(res=>{
                setMbtis(res.data);
                console.log("성공");  
            }).catch(err=>{
                console.log("실패")
                setError(err)
                throw err
            })
        } catch (e){
            return <div>에러가 발생했습니다.</div>;
        }
    };
    

    

    return (
        <>
            <button onClick={holder}>api get id 1,2</button>
            {mbtis && (
                <textarea
                    rows={7}
                    value={JSON.stringify(mbtis, null, 2)}
                    readOnly={true}
                    />
            )}
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