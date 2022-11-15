import React, { useState } from "react";
import Language from "../Language/Language";
import { IoLogoNodejs, IoLogoPython } from "react-icons/io";
import { SiPowershell } from "react-icons/si";
import { DiRuby, DiPhp } from "react-icons/di";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdMoreTime } from "react-icons/md";
import "./languages.css";

const Languages = () => {
  const languages = [
    {
      name: "Shell",
      image: <SiPowershell />,
    },
    {
      name: "Node",
      image: <IoLogoNodejs />,
    },
    {
      name: "Ruby",
      image: <DiRuby />,
    },
    {
      name: "PHP",
      image: <DiPhp />,
    },
    {
      name: "Python",
      image: <IoLogoPython />,
    },
  ];

  return (
    <div className="languages-wrapper">
      <h3>LANGUAGE</h3>
      <div className="languages-sub-wrapper">
        <div className="languages-list">
          {languages.map((l) => (
            <Language language={l} key={l} />
          ))}
        </div>
        <BiDotsVerticalRounded />
      </div>

      <div className="authentication">
        <div className="auth-headers">
          <h3>AUTHENTICATION</h3>
          <div className="header-more">
            <h4>HEADER</h4>
            <MdMoreTime />
          </div>
        </div>

        <div className="API-headers">
          <p>Header</p>
          <p>YOUR_API_KEY</p>
        </div>
      </div>
    </div>
  );
};

export default Languages;
