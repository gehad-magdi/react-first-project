import React from "react";
// import Header from "./header/Header";
import MainMenu from "./mainMenu/menu";
import MainFooter from "./footer/mainFooter";
import { Switch, Route } from "react-router-dom";
import Home from "./contentOfHome/Home";
import About from "./about/about";

class App extends React.Component {
	render() {
		const footer = "footer";
		return (
			<div>
				{/* <Header /> */}
				<MainMenu />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/users"></Route>
				</Switch>
				<MainFooter className={footer} />
			</div>
		);
	}
}

export default App;
