// src/components/Homepage.js

import React, { useState, useEffect } from "react";
import { HotKeys } from "react-hotkeys";

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
      alert("You won!");
      console.log("You won!");
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

  return (
    <div className="home-page" tabIndex="0">
      <HotKeys keyMap={keyMap} handlers={handlers}>
        <div>Type "cssbattle"</div>
      </HotKeys>
    </div>
  );
};

export default Homepage;
