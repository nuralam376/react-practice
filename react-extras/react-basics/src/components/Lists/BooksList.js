import React from "react";
import Book from "../Representational/Book/Book";

const BooksList = (props) => {
  return props.books.map((book, index) => (
    <Book
      key={index}
      bookName={book.bookName}
      writer={book.writer}
      delete={() => props.deleteBook(index)}
      inputChange={(event) => props.changeInputState(event, index)}
    />
  ));
};

export default BooksList;
