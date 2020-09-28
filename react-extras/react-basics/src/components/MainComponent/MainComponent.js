import React, { Component } from "react";
import bookList from "../../assets/books";
import BooksList from "../Lists/BooksList";

export default class MainComponent extends Component {
  state = {
    books: bookList,
    showBooks: true,
  };

  changeBookState = (bookName) => {
    this.setState({
      books: [
        {
          bookName: bookName,
          writer: "Abc",
        },
        {
          bookName: "World 87",
          writer: "Def",
        },
      ],
    });
  };

  changeInputState = (event, index) => {
    const books = [...this.state.books];
    const book = books[index];
    book.bookName = event.target.value;
    books[index] = book;
    this.setState({
      books,
    });
  };

  toggleShowBooks = () => {
    this.setState({
      showBooks: !this.state.showBooks,
    });
  };

  deleteBook = (index) => {
    // const books = this.state.books;
    // const books = this.state.books.slice();
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({
      books: books,
    });
  };

  render() {
    let books = null;
    if (this.state.showBooks) {
      books = (
        <BooksList
          books={this.state.books}
          deleteBook={this.deleteBook}
          changeInputState={this.changeInputState}
        />
      );
    }
    return (
      <div className="App">
        <button onClick={this.toggleShowBooks}>Toggle Books</button>
        {books}
      </div>
    );
  }
}
