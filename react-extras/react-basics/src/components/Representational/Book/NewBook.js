import React, { Component } from "react";
import { createRef } from "react";

class NewBook extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   bookName: "",
    //   writer: "",
    //   description: "",
    // };
    // this.handleInputChange = this.handleInputChange.bind(this);
    this.bookName = createRef();
    this.writer = createRef();
    this.description = createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;
    // this.setState({
    //   [name]: value,
    // });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.bookName.current.value);
    console.log(this.writer.current.value);
    console.log(this.description.current.value);
  };

  render() {
    return (
      <div>
        <h1>New Book Entry</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="bookName">BookName</label>
          <br />
          <input
            type="text"
            name="bookName"
            // value={this.state.bookName}
            ref={this.bookName}
            // onChange={this.handleInputChange}
          />
          <br />
          <label htmlFor="writer">Writer</label>
          <br />
          <input
            type="text"
            name="writer"
            ref={this.writer}
            // value={this.state.writer}
            // onChange={this.handleInputChange}
          />
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            // onChange={this.handleInputChange}
            // value={this.state.description}
            ref={this.description}
          ></textarea>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewBook;
