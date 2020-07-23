import React from "react";

const Reshuffle = ({ currentDeckID }) => {
  const submitReshuffle = () => {
    if (shouldShuffle()) {
      //TODO Make a call with the deck id to shuffle the deck and reset the rules
      console.log("Shuffling");
      return;
    }
    console.log("Check Shuffle First");
  };
  const shouldShuffle = () => {
    const checkbox = document.getElementById("shuffle-check");
    return checkbox.checked;
  };
  return (
    <div className="reshuffle push">
      <input
        className="mr2"
        type="checkbox"
        id="shuffle-check"
        aria-label="Shuffle Deck?"
        onChange={shouldShuffle}
      ></input>
      <a
        className="submit-button link dim ba br2 bw1 ph3 pv2 mt3 mb3 mr3 black"
        href="#0"
        onClick={submitReshuffle}
      >
        Shuffle Deck
      </a>
    </div>
  );
};

export default Reshuffle;
