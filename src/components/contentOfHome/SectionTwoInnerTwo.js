import React from "react";
import SecoundImage from "../../assets/images/Marble-Mockup.svg";
import { Grid } from "@material-ui/core";

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Name: "buttonName",
			color: "black",
			backgroundColor: "#fff",
			width: "200px",
			height: "59px",
		};
	}
	render() {
		return (
			<Grid container alignItems="center" className="sectionInnerTwo">
				<div className="backgroundImg">
					<img src={SecoundImage} alt={"Logo"}></img>
				</div>

				<Grid item xs={12} lg={6}></Grid>
				<Grid item xs={12} lg={6} className="backgroundColor">
					<div className={this.props.className}>
						<h1>About AMWAJ</h1>
						<span>MARBLES AND STONES</span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure.
						</p>
						<button type="button" onClick={null} className={this.state.Name}>
							READ MORE
						</button>
					</div>
				</Grid>
			</Grid>
		);
	}
}
export default Content;
