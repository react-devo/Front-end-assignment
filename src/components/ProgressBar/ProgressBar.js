import React, { useState, useEffect } from "react";
import './ProgressBar.css'
import ProgressViewBar from './ProgressBarview'

function ProgressBar() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let intervalId = setInterval(() => {
            setValue(prev => prev + 4)
        }, 1000);
        return (() => clearInterval(intervalId))
    }, [])

    return (
        <div className="main">
            <span>This is progressBar.</span>
            <ProgressViewBar value={value} />
        </div>
    )
}

export default ProgressBar;