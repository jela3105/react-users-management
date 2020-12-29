import React, { Component } from "react";
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "The name is required";
  }
  if (!values.email) {
    errors.email = "The name is required";
  }
  if (!values.website) {
    errors.website = "The name is required";
  }
  return errors;
};

export default class UserForm extends Component {
  state = {
    errors: {},
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { errors, ...withoutErrors } = this.state;
    const result = validate(withoutErrors);
    this.setState({ errors: result });
    if (!Object.keys(result).length) {
      //send form
    }
    e.target.reset();
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Name" name="name" onChange={this.handleChange} />
        {errors.name && <p>{errors.name}</p>}
        <input placeholder="Email" name="email" onChange={this.handleChange} />
        {errors.email && <p>{errors.website}</p>}
        <input
          placeholder="Web site"
          name="website"
          onChange={this.handleChange}
        />
        {errors.website && <p>{errors.website}</p>}
        <input type="submit" value="Send" />
      </form>
    );
  }
}
