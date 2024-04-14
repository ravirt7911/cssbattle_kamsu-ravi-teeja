import React, { useState, useEffect } from "react";
import { HotKeys } from "react-hotkeys";
import confetti from "canvas-confetti";
import "./Homepage.css";

const Homepage = () => {
  const [sequence, setSequence] = useState("");

  useEffect(() => {
    const handleKeyPress = (e) => {
      handleSequenceChange(e.key);
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [sequence]);

  const handleSequenceChange = (key) => {
    setSequence((prevSequence) => prevSequence + key);
    console.log(sequence);
    if ((sequence + key).toLowerCase() === "cssbattle") {
      celebrate();
    }
  };

  const keyMap = {
    LETTER: "a b c e l s t ",
  };

  const handlers = {
    LETTER: (key) => {
      handleSequenceChange(key);
    },
  };

  const celebrate = () => {
    confetti({
      particleCount: 700,
      spread: 360,
      colors: [
        "#FF0000", // Red
        "#FFA500", // Orange
        "#FFFF00", // Yellow
        "#00FF00", // Green
        "#0000FF", // Blue
      ],
      shapes: ["square", "circle", "triangle"],
    });
  };

  return (
    <div className="main" tabIndex="0">
      <img className="logo" src="./logo-new.svg" alt="logo" />
      <HotKeys keyMap={keyMap} handlers={handlers}>
        <div className="home-page">Type "cssbattle"</div>
      </HotKeys>
    </div>
  );
};

export default Homepage;
