import React from "react";
// import Header from "./header/Header";
import MainMenu from "./mainMenu/menu";
import MainFooter from "./footer/mainFooter";

class App extends React.Component {
	render() {
		const footer = "footer";
		return (
			<div>
				{/* <Header /> */}
				<MainMenu />
				<MainFooter className={footer} />
			</div>
		);
	}
}

export default App;
