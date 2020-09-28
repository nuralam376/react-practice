import React, { Component } from "react";

class Person extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.age}</p>
      </div>
    );
  }
}

export default Person;
