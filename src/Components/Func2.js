import React from 'react';
import dummy from "../db/data.json"

const Func2 = () => {

    const mbti = "enfp"
    const mbtiList = dummy.playlist.filter(아무말 => (
        아무말.mbti === mbti
    ))

    return (
        <div>
            <table>
                <tbody>
                    {mbtiList.map((mbti) => (
                        <tr key={mbti.id}>
                            <td>{mbti.mbti}</td>
                            <td>{mbti.music}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Func2;