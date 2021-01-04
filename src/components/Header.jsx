import React, { Component } from "react";

const styles = {
  header: {
    textAlign: "center",
    marginRight: "200px",
    marginLeft: "200px",
    listStyleType: "none",
    backgroundColor: "#828282",
  },
  h2: {
    display: "inline",
  },
  button: {
    color: "#eee",
    backgroundColor: "#000",
    padding: "10px",
    border: "1px solid black",
    borderRadius: "10px",
    margin: "15px",
  },
};

export default class Header extends Component {
  render() {
    const { newUser } = this.props;
    return (
      <header style={styles.header}>
        <h2 style={styles.h2}>Users</h2>
        <button onClick={newUser} style={styles.button}>
          New user
        </button>
      </header>
    );
  }
}
