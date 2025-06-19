// src/components/ProgressBar.js
import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  // Animate the progress count
  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev < progress) return Math.min(prev + 1, progress);
        if (prev > progress) return Math.max(prev - 1, progress);
        clearInterval(timer);
        return prev;
      });
    }, 15);
    return () => clearInterval(timer);
  }, [progress]);

  return (
    <div className="progress-container">
      <div
        className="progress-liquid"
        style={{ height: `${displayProgress}%` }}
        aria-label={`Progress ${displayProgress}%`}
      >
        <span className="progress-label">{displayProgress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;