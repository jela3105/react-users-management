import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

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
        console.log("Hapy 2021");
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

  updateUser = (id, values) => {
    axios
      .put(`http://jsonplaceholder.typicode.com/users/${id}`, values)
      .then(() => {
        const newData = this.state.data.map((x) => (x.id === id ? values : x));
        this.setState({
          data: newData,
          route: "list",
          selectUser: "",
        });
      });
  };

  render() {
    const { route, data, selectUser } = this.state;
    const initialValues = selectUser && data.find((x) => x.id === selectUser);
    return (
      <div className="App">
        {route === "list" && (
          <ViewList
            handleClick={this.selectUser}
            data={data}
            newUser={this.newUser}
          />
        )}
        {route === "form" && (
          <UserForm
            initialValues={initialValues || {}}
            handleNewUser={this.addNewUser}
            handleUpdate={this.updateUser}
          />
        )}
      </div>
    );
  }
}

export default App;
