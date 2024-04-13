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
    LETTER: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
  };

  const handlers = {
    LETTER: (key) => {
      handleSequenceChange(key);
    },
  };

  const celebrate = () => {
    confetti({
      particleCount: 1000,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#FF0000", "#00FF00", "#0000FF"],
      startVelocity: 20,
    });
  };

  return (
    <div className="home-page" tabIndex="0">
      <HotKeys keyMap={keyMap} handlers={handlers}>
        <div>Type "cssbattle"</div>
      </HotKeys>
    </div>
  );
};

export default Homepage;
