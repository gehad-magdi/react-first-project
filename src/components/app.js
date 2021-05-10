import React from "react";
import Home from "./contentOfHome/Home";
import MainFooter from "./footer/mainFooter";
import Header from "./header/Header";

class App extends React.Component {
	render() {
		const footer = "footer";
		return (
			<div>
				<Header />
				{home}
				<MainFooter className={footer} />
			</div>
		);
	}
}
let home = <Home />;
export default App;
