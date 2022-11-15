import React, { useState } from "react";
import { BsChevronExpand } from "react-icons/bs";
import Duration from "../duration/Duration";
import "./requestHistory.css";

const RequestHistory = () => {
  const [duration, setDuration] = useState(1);
  const handleDuration = (e) => {
    setDuration(e);
  };

  const handleDurationChoice = () => {
    const box = document.querySelector(".duration-box");
    box.style.display = "flex";
  };

  return (
    <div className="request-history-wrapper" onClick={handleDurationChoice}>
      <h2>YOUR REQUEST HISTORY</h2>

      <div className="history">
        <div className="calls-duration">
          <p className="calls">0 calls</p>
          <div className="choose-duration" onClick={handleDurationChoice}>
            {duration === 1 ? <p>{duration} Day</p> : <p>{duration} Days</p>}
            <BsChevronExpand className="icon" size={14} />
          </div>
          <Duration handleDuration={handleDuration} />
        </div>
        <p className="descrpt">
          Your API calls will appear here. Make a request to get started!
        </p>
      </div>
    </div>
  );
};

export default RequestHistory;
