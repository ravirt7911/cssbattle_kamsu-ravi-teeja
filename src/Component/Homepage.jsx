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
    // Left confetti blast
    confetti({
      particleCount: 900,
      angle: 270,
      spread: 150,
      origin: { x: 0, y: 0 },
      colors: ["#FF0000", "#FFFF00", "#00FF00", "#0000FF"],
      shapes: ["square", "circle"],
    });

    // Right confetti blast
    confetti({
      particleCount: 900,
      angle: 270,
      spread: 150,
      origin: { x: 1, y: 0 },
      colors: ["#FF0000", "#FFFF00", "#00FF00", "#0000FF"],
      shapes: ["square", "circle"],
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
