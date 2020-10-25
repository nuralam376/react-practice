import React, { Component } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import bookList from "../../assets/books";
import BooksList from "../Lists/BooksList";
import NewBook from "../Representational/Book/NewBook";
import { withRouter } from "react-router-dom";
import BookDetail from "../Representational/BookDetail";

export default withRouter(
  class MainComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        books: bookList,
        selectedBook: null,
      };
    }

    selectedBookHandler = (bookName) => {
      const book = this.state.books.find((book) => book.bookName === bookName);

      this.setState({
        selectedBook: book,
      });
    };

    render() {
      let books = (
        <BooksList
          books={this.state.books}
          selectedBookHandler={this.selectedBookHandler}
        />
      );

      return (
        <div className="App">
          <div className="navbar">
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/new-book">
                  New Book
                </NavLink>
              </li>
            </ul>
            <Switch>
              <Route exact path="/books" render={() => books} />
              <Route exact path="/new-book" component={NewBook} />
              <Route
                exact
                path="/book/:id"
                render={() => <BookDetail book={this.state.selectedBook} />}
              />
              <Redirect from="/" to="/books" />
            </Switch>
          </div>
        </div>
      );
    }
  }
);
