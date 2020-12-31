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

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      ...props.initialValues,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { errors, ...withoutErrors } = this.state;
    const result = validate(withoutErrors);

    if (!Object.keys(result).length) {
      const { handleSubmit, initialValues, handleUpdate } = this.props;
      if (initialValues.id) {
        handleUpdate(initialValues.id, withoutErrors);
      } else {
        handleSubmit(withoutErrors);
      }
    } else {
      this.setState({ errors: result });
    }
  };
  render() {
    const { errors } = this.state;
    const { initialValues } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Name"
          name="name"
          onChange={this.handleChange}
          defaultValue={initialValues.name}
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          placeholder="Email"
          name="email"
          onChange={this.handleChange}
          defaultValue={initialValues.email}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          placeholder="Web site"
          name="website"
          onChange={this.handleChange}
          defaultValue={initialValues.website}
        />
        {errors.website && <p>{errors.website}</p>}
        <input type="submit" value="Send" />
      </form>
    );
  }
}
