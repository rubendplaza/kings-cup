//LIBRARIES
import React from "react";

//COMPONENTS
import CurrentDeck from "../../Components/CurrentDeck/CurrentDeck";
// import Reshuffle from "../../Components/Reshuffle/Reshuffle";
// import PlayingCard from "../../Components/PlayingCard/PlayingCard";
// import DrawCardButton from "../../Components/DrawCardButton/DrawCardButton";

class DeckContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDeck: "",
      deckID: "",
    };
  }

  render() {
    const { currentDeck, deckID, currentCardUrl } = this.state;
    return (
      <div className="deck-container">
        <CurrentDeck currentDeck={currentDeck} />
        {/* <Reshuffle deckID={deckID} /> */}
        {/* <PlayingCard currentCardUrl={currentCardUrl} /> */}
        {/* <DrawCardButton deckID={deckID} /> */}
      </div>
    );
  }
}

export default DeckContainer;
