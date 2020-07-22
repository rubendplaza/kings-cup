//LIBRARIES
import React from "react";

//COMPONENTS
// import RulesList from "../../Components/RulesList";
// import CreateRule from "../../Components/CreateRule";

const initialState = {
  currentRules: [],
};

class RuleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <div className="rule-container">
        {/* <RulesList /> */}
        {/* <CreateRule /> */}
      </div>
    );
  }
}

export default RuleContainer;
