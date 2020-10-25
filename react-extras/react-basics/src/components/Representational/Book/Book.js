import React from "react";
import "../../../Stylesheets/Book.css";
import { withRouter } from "react-router-dom";

const Book = (props) => {
  return (
    <div className="Book" onClick={props.selectedBookHandler}>
      <h1>{props.bookName}</h1>
      <h4>{props.writer}</h4>
    </div>
  );
};

export default withRouter(Book);
