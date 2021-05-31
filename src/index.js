import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import "./index.sass";
import App from "./components/app";

class Carefull extends React.Component {
	render() {
		return (
			<Router>
				<App />
			</Router>
		);
	}
}

ReactDOM.render(
	<Carefull className=" Carefull " />,
	document.getElementById("root")
);
