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

  selectUser = (id) => {
    this.setState({
      rout: "form",
      selectUser: id,
    });
  };

  newUser = () => {
    this.setState({
      rout: "form",
    });
  };

  render() {
    const { rout, data } = this.state;
    return (
      <div className="App">
        {rout === "list" && (
          <ViewList
            handleClick={this.selectUser}
            data={data}
            newUser={this.newUser}
          />
        )}
        {rout === "form" && <UserForm />}
      </div>
    );
  }
}

export default App;
