import React from "react";
import "./language.css";

const Language = ({ language }) => {
  return (
    <div className="language">
      <>{language.image}</>
      <p className="language-name">{language.name}</p>
    </div>
  );
};

export default Language;
