import React, { Component } from "react";

import UserForm from "./components/UserForm";
import ViewList from "./components/ViewList";

class App extends Component {
  state = {
    rout: "list", //form
  };

  render() {
    const { rout } = this.state;
    return (
      <div className="App">
        {rout === "list" && <ViewList />}
        {rout === "form" && <UserForm />}
      </div>
    );
  }
}

export default App;
