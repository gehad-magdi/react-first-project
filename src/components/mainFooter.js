import React from "react";
import Email from "../assets/images/Email.svg";
import Icone from "../assets/images/icon.svg";
import { Container, Grid } from "@material-ui/core";

class MainFooter extends React.Component {
	render() {
		return (
			<div>
				<div className="footer">
					<h1>GET A QUOTATION</h1>
					<Container>
						<Grid container spacing={2} alignItems="center" justify="center">
							<Grid xs={12} lg={10}>
								<p className="blue-color">OR</p>
								<p>Get in Touch</p>
								<div className="info">
									<Grid
										container
										spacing={2}
										alignItems="center"
										justify="center"
									>
										<Grid xs={12} lg={4}>
											<div>
												<img src={Email} alt={"loding"}></img>
												<p className="textInfo">Info@amwajnational.com</p>
											</div>
										</Grid>
										<Grid xs={12} lg={4}></Grid>
										<Grid xs={12} lg={4}>
											<div>
												<img src={Icone} alt={"loding"}></img>
												<p className="textInfo">+20 111 0000 111</p>
											</div>
										</Grid>
									</Grid>
								</div>
							</Grid>
						</Grid>
					</Container>
				</div>
			</div>
		);
	}
}
export default MainFooter;
