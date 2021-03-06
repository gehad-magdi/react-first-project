import React from "react";
import { Container, Grid } from "@material-ui/core";
import Email from "../../assets/images/Email.svg";
import Icone from "../../assets/images/icon.svg";

class Footer extends React.Component {
	render() {
		return (
			<Container>
				<Grid container spacing={2} alignItems="center" justify="center">
					<Grid item xs={12} lg={10}>
						<p className="blue-color">OR</p>
						<p>Get in Touch</p>
						<div className="info">
							<Grid container spacing={2} alignItems="center" justify="center">
								<Grid item xs={12} lg={4}>
									<div>
										<img src={Email} alt={"loding"}></img>
										<p className="textInfo">Info@amwajnational.com</p>
									</div>
								</Grid>
								<Grid item xs={12} lg={4}></Grid>
								<Grid item xs={12} lg={4}>
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
		);
	}
}
export default Footer;
