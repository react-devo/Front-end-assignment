import React, { useState } from 'react';
import '../../styles/quiz.css'

const Quiz = () => {
    const [activeDiv, setActiveDiv] = useState([]);
    const [isAllDone, setIsAllDone] = useState(true)

    const flatArray = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];


    const inactiveDiv = () => {
        let timeId = '';
        timeId = setInterval(() => {
            setActiveDiv((item) => {
                if (item.length > 0) {
                    let newAr = item.slice();
                    let num = newAr.pop()
                    return item.filter((item) => item !== num)
                } else {
                    clearInterval(timeId);
                    setIsAllDone(true)
                    return []
                }
            })
        }, 500);
    }

    const selectDiv = (index) => {
        if ((activeDiv.length === 0 || !activeDiv.includes(index))) {
            setActiveDiv([...activeDiv, index]);
        }
        if (flatArray.flat(1).filter((item) => item > 0).length === activeDiv.length + 1) {
            setIsAllDone(false)
            inactiveDiv()
        }
    }


    return (
        <div className='main__div'>
            <h1>This is Quiz.</h1>
            <div className='grid' style={{ gridTemplateColumns: `repeat(${flatArray[0].length},1fr)` }}>
                {flatArray.flat(1).map((item, i) => {
                    return (
                        item ? <div key={i} onClick={() => isAllDone && selectDiv(i)} className={`containers ${activeDiv.some((item) => item === i) ? 'active__div' : ''}`}> </div> : <span className='containers' key={i}></span>
                    )
                })}
            </div>

        </div>
    )
}

export default Quiz;