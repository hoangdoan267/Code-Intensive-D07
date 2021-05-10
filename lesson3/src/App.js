import React from "react";

import logo from "./logo.svg";
import "./App.css";
import ListItem from "./components/ListItem";

const COMPLETED = "completed";
const TODO = "todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // undone: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
      list: [
        {
          name: "Item 1",
          status: TODO,
        },
        {
          name: "Item 2",
          status: TODO,
        },
        {
          name: "Item 3",
          status: TODO,
        },
        {
          name: "Item 4",
          status: COMPLETED,
        },
        {
          name: "Item 5",
          status: TODO,
        },
      ],
    };
  }

  renderUndoneList = () => {
    return this.state.list.map((element, index) => {
      return (
        <ListItem
          onChange={() => this.changeItem(index)}
          item={element}
          exampleProps={1}
        />
      );
    });
  };

  changeItem = (index) => {
    const list = [...this.state.list];
    if (list[index].status === COMPLETED) {
      list[index].status = TODO;
    } else {
      list[index].status = COMPLETED;
    }
    this.setState({
      list,
    });
  };

  onAdd = () => {
    const newItem = {
      name: "New",
      status: TODO,
    };

    const newList = [...this.state.list, newItem];

    this.setState({
      list: newList,
    });
  };

  render() {
    return (
      <div className="app-container">
        <h1>Todo App</h1>
        <button onClick={this.onAdd}>Add To Do</button>
        <div className="todo-app">
          <div className="list-container" id="todo">
            <div className="list-header">TODO</div>
            <ul className="list">{this.renderUndoneList()}</ul>
          </div>
          {/* <div className="list-container" id="done">
            <div className="list-header">COMPLETED</div>
            <ul className="list">{this.renderDoneList()}</ul>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
