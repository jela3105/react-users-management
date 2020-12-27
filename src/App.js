import React, { Component } from "react";
import axios from "axios";

import UserForm from "./components/UserForm";
import ViewList from "./components/ViewList";

class App extends Component {
  state = {
    rout: "list", //form
    data: [],
  };

  constructor() {
    super();
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then(({ data }) => this.setState({ data }));
  }

  render() {
    const { rout, data } = this.state;
    return (
      <div className="App">
        {rout === "list" && <ViewList data={data} />}
        {rout === "form" && <UserForm />}
      </div>
    );
  }
}

export default App;
