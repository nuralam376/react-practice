import React from "react";

const BookDetail = (props) => {
  if (props.book === null) return <div>No Book</div>;
  return (
    <div>
      <h1>{props.book.bookName}</h1>
      <p>{props.book.writer}</p>
      <p>{props.book.description}</p>
    </div>
  );
};

export default BookDetail;
