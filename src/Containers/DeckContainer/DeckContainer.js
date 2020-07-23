//LIBRARIES
import React, { Component } from "react";

//COMPONENTS
import CurrentDeck from "../../Components/CurrentDeck/CurrentDeck";
import Reshuffle from "../../Components/Reshuffle/Reshuffle";
// import PlayingCard from "../../Components/PlayingCard/PlayingCard";
// import DrawCardButton from "../../Components/DrawCardButton/DrawCardButton";

//STYLES
import "./DeckContainer.css";

class DeckContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCardUrl: "",
    };
  }

  render() {
    const { currentDeckID, currentDeckName } = this.props;
    const { currentCardUrl } = this.state;
    return (
      <div className="deck-container">
        <div className="deckAndShuffle">
          <CurrentDeck currentDeckName={currentDeckName} />
          <Reshuffle currentDeckID={currentDeckID} />
        </div>

        {/* <PlayingCard currentCardUrl={currentCardUrl} /> */}
        {/* <DrawCardButton deckID={deckID} /> */}
      </div>
    );
  }
}

export default DeckContainer;
