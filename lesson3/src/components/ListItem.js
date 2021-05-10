import React from "react";

const COMPLETED = "completed";
const TODO = "todo";

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, onChange } = this.props;
    const style = item.status === COMPLETED ? "done" : "";

    return (
      <li onClick={onChange} className={`todo-item ${style}`}>
        {this.props.item.name}
      </li>
    );
  }
}
