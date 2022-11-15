import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import "./duration.css";

const Duration = (props) => {
  const duration = [30, 7, 1];
  const [time, setTime] = useState(1);
  const { handleDuration } = props;

  const handleSelectedDuration = (s) => {
    handleDuration(s);
    setTime(s);
    const box = document.querySelector(".duration-box");
    box.style.display = "none";
  };

  return (
    <div className="duration-box">
      {duration.map((d) =>
        d === 1 ? (
          <div
            className={time === d ? "time active-time" : "time inactive-time"}
            key={d}
          >
            <TiTick className={time === d ? "active-icon" : "inactive-icon"} />
            <p onClick={() => handleSelectedDuration(d)}>{d} Day</p>
          </div>
        ) : (
          <div
            key={d}
            className={time === d ? "time active-time" : "time inactive-time"}
          >
            <TiTick className={time === d ? "active-icon" : "inactive-icon"} />
            <p onClick={() => handleSelectedDuration(d)}>{d} Days</p>
          </div>
        )
      )}
    </div>
  );
};

export default Duration;
