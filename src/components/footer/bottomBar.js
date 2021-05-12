import React from "react";
import { Container, Grid } from "@material-ui/core";
import Logo from "../../assets/images/Logo.svg";
import MultilineTextFields from "../footer/subscribe";
import MenuFooter from "../footer/menuFooter";
class BottomBar extends React.Component {
	render() {
		return (
			<Container>
				<Grid container alignItems="center" justify="center">
					<Grid item xs={12} lg={10}>
						<Grid container alignItems="center" justify="center">
							<Grid item xs={12} lg={4} style={{ padding: 20 }}>
								<div className="logo-footer">
									<img src={Logo} alt="logo" />
								</div>
								<p className="descripion-footer">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequa.{" "}
								</p>
								<p className="coppyRight">
									© 2018 Amwaj National, All Rights Reserved.
								</p>
							</Grid>
							<Grid item xs={12} lg={2} style={{ padding: 20 }}>
								<MenuFooter />
							</Grid>
							<Grid item xs={false} lg={1} style={{ padding: 20 }}></Grid>
							<Grid item xs={12} lg={5}>
								<div>
									<p className="subscripeFooter">
										SUBSCIRBE TO OUR NEWS LETTER
									</p>
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
