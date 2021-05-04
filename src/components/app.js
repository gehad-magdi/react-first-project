import React from "react";
import Home from "./Home";
import MainFooter from "./mainFooter";
import Header from "./Header";

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
