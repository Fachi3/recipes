import React, { Component } from "react";

import { Provider } from "mobx-react";

import stores from "../MobX";

import AppNavigation from "../Navigation/AppNavigation";

export default class App extends Component {
  	render() {
		return (
			<Provider {...stores}>
				<AppNavigation />
			</Provider>
		);
  	}
}