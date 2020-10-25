import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "../Representational/Book/Book";

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books,
    };
  }

  render() {
    return this.props.books.map((book, index) => (
      <Link
        to={`/book/${book.id}`}
        key={book.id}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Book
          bookName={book.bookName}
          writer={book.writer}
          delete={() => this.props.deleteBook(index)}
          inputChange={(event) => this.props.changeInputState(event, index)}
          selectedBookHandler={() =>
            this.props.selectedBookHandler(book.bookName)
          }
        />
      </Link>
    ));
  }
}

export default BooksList;
