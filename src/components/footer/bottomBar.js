import React from "react";
import { Container, Grid } from "@material-ui/core";
import Logo from "../../assets/images/Logo.svg";
import MultilineTextFields from "../footer/subscribe";
class BottomBar extends React.Component {
	render() {
		return (
			<Container>
				<Grid container alignItems="center" justify="center">
					<Grid item xs={12} lg={10}>
						<Grid container alignItems="center" justify="center">
							<Grid item xs={12} lg={4}>
								<div className="">
									<img src={Logo} alt="logo" />
								</div>{" "}
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequa.{" "}
								</p>
								<p>© 2018 Amwaj National, All Rights Reserved.</p>
							</Grid>
							<Grid item xs={12} lg={2}>
								<div>
									<h6>SITE MAP</h6>
									<ul>
										<li>HOME</li>
										<li>ABOUT US</li>
										<li>PRODUCTS</li>
										<li>PROJECTS</li>
										<li>NEWS</li>
										<li>CONTACT US</li>
									</ul>
								</div>
							</Grid>
							<Grid item xs={false} lg={2}></Grid>
							<Grid item xs={12} lg={4}>
								<div>
									<p>SUBSCIRBE TO OUR NEWS LETTER</p>
									<MultilineTextFields />
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		);
	}
}
export default BottomBar;
