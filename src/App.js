import React, { Component } from "react";
import axios from "axios";

import UserForm from "./components/UserForm";
import ViewList from "./components/ViewList";

class App extends Component {
  state = {
    route: "list", //form
    data: [],
  };

  constructor() {
    super();
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then(({ data }) => this.setState({ data }));
  }

  selectUser = (id) => {
    this.setState({
      route: "form",
      selectUser: id,
    });
  };

  addNewUser = (user) => {
    axios
      .post("http://jsonplaceholder.typicode.com/users", user)
      .then(({ data }) => {
        const newData = this.state.data.concat(data);
        this.setState({
          data: newData,
          route: "list",
        });
      });
  };

  newUser = () => {
    this.setState({
      route: "form",
    });
  };

  render() {
    const { route, data } = this.state;
    return (
      <div className="App">
        {route === "list" && (
          <ViewList
            handleClick={this.selectUser}
            data={data}
            newUser={this.newUser}
          />
        )}
        {route === "form" && <UserForm handleSubmit={this.addNewUser} />}
      </div>
    );
  }
}

export default App;
