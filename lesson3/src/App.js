import React from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      information: {
        name: "Hoang",
        age: 26,
        job: "mobile engineer",
        company: "mindx",
      },
      undone: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
      done: [],
    };
  }

  changeName = () => {
    const newInformation = { ...this.state.information, name: "Hoang 3" };

    this.setState({
      information: newInformation,
    });
  };

  changeAge = () => {};

  renderUndoneList = () => {
    return this.state.undone.map((element, index) => {
      return <li>{element}</li>;
    });
  };

  renderDoneList = () => {
    return this.state.done.map((element, index) => {
      return <li>{element}</li>;
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.changeName}>Change name</button>
          <h5>Undone</h5>
          <ul>{this.renderUndoneList()}</ul>
          <h5>Done</h5>
          <ul>{this.renderDoneList()}</ul>
        </header>
      </div>
    );
  }
}
export default App;
