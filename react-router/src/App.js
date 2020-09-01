import React from "react";
import "./App.css";
import Users from "./components/Users/Users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error404 from "./components/404/Error404";
import UserDetails from "./components/UserDetails/UserDetails";
import Header from "./components/Header/Header";
import Countries from "./components/Countries/Countries";
import CountryDetail from "./components/CountryDetail/CountryDetail";

function App() {
	return (
		<div className="App">
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Countries />
					</Route>
					<Route exact path="/countries">
						<Countries />
					</Route>
					<Route exact path="/country/:countryId">
						<CountryDetail />
					</Route>
					<Route exact path="/users">
						<Users />
					</Route>

					<Route exact path="/user/:userId">
						<UserDetails></UserDetails>
					</Route>
					<Route exact path="*">
						<Error404></Error404>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
