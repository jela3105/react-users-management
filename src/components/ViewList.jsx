import { Component } from "react";
import Header from "./Header";
import List from "./List";

export default class ViewList extends Component {
  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    );
  }
}
