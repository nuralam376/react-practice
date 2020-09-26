import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Person name="Abc" age="20">
          This is children content
        </Person>
        <Person name="Def" age="29" />
        <Person name="Ghi" age="31" />
      </div>
    );
  }
}

export default App;
