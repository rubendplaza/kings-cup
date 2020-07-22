//LIBRARIES
import React from "react";

//STYLES
import "./App.css";

//COMPONENTS
import Header from "../../Components/Header/Header";
import DeckContainer from "../DeckContainer/DeckContainer";
// import RuleContainer from "../RuleContainer/RuleContainer";

const initialState = {
  deckID: "",
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    const { deckID } = this.state;
    return (
      <div className="App">
        <Header />
        <DeckContainer deckID={deckID} />
        {/* <RuleContainer /> */}
      </div>
    );
  }
}

export default App;
