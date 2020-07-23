//LIBRARIES
import React, { Component } from "react";
import { DropdownList } from "react-widgets";

//STYLES
import "react-widgets/dist/css/react-widgets.css";
import "./Header.css";

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

class Header extends Component {
  constructor() {
    super();
    this.state = {
      existingDecks: [],
      newDeckName: "",
      currentDeck: "",
    };
  }

  inputChange = (event) => {
    this.setState({ newDeckName: event.target.value });
  };

  //TODO this has to create a new deck then submit that deck to the database with the name
  createNewDeck = () => {
    console.log(this.state.newDeckName);
  };

  //TODO add a use deck button to change routes to the deck view
  render() {
    return (
      <header className="header">
        <h2 className="appName ma3">KING'S CUP</h2>
        <div className="buttons"></div>
        <DropdownList
          className="deck-dropdown push mr3 mt3 mb3 w-10 ba b--black bw1 br2"
          data={this.state.existingDecks}
          defaultValue={"Pick Deck"}
        />
        <input
          className="new-deck-input input-reset ba b--black bw1 br2 pa2 mb3 mt3 mr3"
          type="text"
          id="deckNameInput"
          onChange={this.inputChange}
          aria-label="Deck Name"
        ></input>
        <a
          className="submit-button link dim ba br2 bw1 ph3 pv2 mt3 mb3 mr3 black"
          href="#0"
          onClick={this.createNewDeck}
        >
          Submit
        </a>
      </header>
    );
  }
}

export default Header;
