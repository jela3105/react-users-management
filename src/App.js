import React, { Component } from "react";

import UserForm from "./components/UserForm";
import ViewList from "./components/ViewList";

class App extends Component {
  state = {
    rout: "list", //form
  };

  render() {
    return (
      <div className="App">
        <ViewList />
        <UserForm />
      </div>
    );
  }
}

export default App;
