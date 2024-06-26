import React, { useState, useEffect } from "react";
import { HotKeys } from "react-hotkeys";
import confetti from "canvas-confetti";
import "./Homepage.css";

const Homepage = () => {
  const [sequence, setSequence] = useState("");
  const [cssBattleTyped, setCssBattleTyped] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      handleSequenceChange(e.key);
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [sequence]);

  // Update sequence on keypress
  const handleSequenceChange = (key) => {
    setSequence((prevSequence) => prevSequence + key);
    console.log(sequence);
    if ((sequence + key).toLowerCase().includes("cssbattle")) {
      setCssBattleTyped(true);
    } else {
      setCssBattleTyped(false);
    }
  };

  useEffect(() => {
    if (cssBattleTyped) {
      celebrate();
      setSequence("");
    }
  }, [cssBattleTyped]);

  // Key mappings
  const keyMap = {
    LETTER: "a b c e l s t ",
  };

  // Key event handlers
  const handlers = {
    LETTER: (key) => {
      handleSequenceChange(key);
    },
  };

  // Trigger confetti celebration
  const celebrate = () => {
    // Left confetti blast
    confetti({
      particleCount: 900,
      angle: 270,
      spread: 200,
      origin: { x: 0, y: 0 },
      colors: ["#FF0000", "#FFFF00", "#00FF00", "#0000FF"],
      shapes: ["square", "circle"],
    });

    // Right confetti blast
    confetti({
      particleCount: 900,
      angle: 270,
      spread: 200,
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
