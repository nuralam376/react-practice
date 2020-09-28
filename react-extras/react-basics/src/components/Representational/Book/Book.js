import React from "react";
import "../../../Stylesheets/Book.css";

const Book = (props) => {
  const style = {
    color: "red",
  };
  return (
    <div className="Book">
      <h1 onClick={props.delete}>{props.bookName}</h1>
      <p style={style}>{props.writer}</p>
      <input type="text" onChange={props.inputChange} value={props.bookName} />
    </div>
  );
};

export default Book;
