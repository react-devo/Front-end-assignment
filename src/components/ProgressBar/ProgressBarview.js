import React, { useState, useEffect } from "react";

function ProgressViewBar({ value }) {
    const [progressbarCount, setProgressBarCount] = useState(0);

    useEffect(() => {
        const count = Math.min(100, Math.max(0, value));
        setProgressBarCount(count);
    }, [value])

    return (
        <div className="progressbar">
            <span style={{ color: `${progressbarCount > 49 ? "white" : "red"}` }}>{progressbarCount}%</span>
            <div style={{ width: `${progressbarCount}%` }}></div>
        </div>
    )

}

export default ProgressViewBar;