import React from "react";
import Footer from "../footer/footer";
import BottomBar from "../footer/bottomBar.js";

class MainFooter extends React.Component {
	render() {
		return (
			<div>
				<div className="footer">
					<h1>GET A QUOTATION</h1>
					<Footer />
				</div>
				<BottomBar />
			</div>
		);
	}
}
export default MainFooter;
