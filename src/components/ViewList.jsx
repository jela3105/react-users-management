import { Component } from "react";
import Header from "./Header";
import List from "./List";

export default class ViewList extends Component {
  render() {
    const { data, handleClick, newUser, buttonStyle } = this.props;
    return (
      <div>
        <Header newUser={newUser} buttonStyle={buttonStyle} />
        <List data={data} handleClick={handleClick} />
      </div>
    );
  }
}
