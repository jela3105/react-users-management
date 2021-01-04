import React, { Component } from "react";

const styles = {
  li: {
    textAlign: "center",
    color: "#eee",
    listStyleType: "none",
    backgroundColor: "#828282",
    margin: "1px",
  },
  ul: {
    marginRight: "200px",
    padding: "0px",
    marginLeft: "200px",
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
export default class List extends Component {
  handleClick = (id) => (e) => {
    const { handleClick } = this.props;
    handleClick(id);
  };

  render() {
    const { data } = this.props;

    return (
      <ul style={styles.ul}>
        {data.map((x) => (
          <li style={styles.li} key={x.id}>
            {x.name}
            <button style={styles.button} onClick={this.handleClick(x.id)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
