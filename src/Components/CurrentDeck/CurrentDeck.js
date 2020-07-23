//LIBRARIES
import React from "react";

const CurrentDeck = ({ currentDeckName }) => {
  return (
    <div className="current-deck ma3">
      <h3>
        Current Deck: <span>{currentDeckName}</span>
      </h3>
    </div>
  );
};

export default CurrentDeck;
