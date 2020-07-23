//LIBRARIES
import React, { Component } from "react";

//STYLES
import "./App.css";

//COMPONENTS
import Header from "../../Components/Header/Header";
import DeckContainer from "../DeckContainer/DeckContainer";
// import RuleContainer from "../RuleContainer/RuleContainer";

const db = [
  {
    deck_id: "rgpy896xb1p6",
    deck_name: "Test Deck 0",
    current_rules: [
      "Can't say no",
      "Can't touch your hair",
      "Can't say okay",
      "Can't swear",
    ],
  },
  {
    deck_id: "0w1cfvznft5u",
    deck_name: "Test Deck 1",
    current_rules: [
      "Can't say no",
      "Can't touch your hair",
      "Can't say okay",
      "Can't swear",
    ],
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDeckID: "",
      currentDeckName: "",
      newDeckName: "",
      existingDecks: [],
    };
  }

  componentDidMount() {
    this.setState({ existingDecks: this.getDeckNames() });
    this.setState({ currentDeckName: this.getCurrentDeckName() });
    this.setState({ currentDeckID: this.getCurrentDeckID() });
  }

  getDeckNames = () => {
    const decks = db.map((deck) => deck.deck_name);
    console.log(decks);
    return decks;
  };

  getCurrentDeckName = () => {
    const deckName = db[0].deck_name;
    console.log(deckName);
    return deckName;
  };

  getCurrentDeckID = () => {
    const deckID = db[0].deck_id;
    console.log(deckID);
    return deckID;
  };


  render() {
    const { currentDeckID, currentDeckName, existingDecks } = this.state;
    return (
      <div className="App">
        <Header
          existingDecks={existingDecks}
          inputChange={this.inputChange}
          createNewDeck={this.createNewDeck}
        />
        <DeckContainer
          currentDeckID={currentDeckID}
          currentDeckName={currentDeckName}
        />
        {/* <RuleContainer /> */}
      </div>
    );
  }
}

export default App;
