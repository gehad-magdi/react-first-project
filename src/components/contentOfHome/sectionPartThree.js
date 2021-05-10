import React from "react";
import SecThree from "./sectionThreePartOne";
import SecSlider from "./sectionThreePartTwo";
import { Container, Grid } from "@material-ui/core";

class TheardThree extends React.Component {
	render() {
		return (
			<div className="sectionThree">
				<Container
					className="secInnerThree"
					style={{ paddingTop: 100, paddingBottom: 100 }}
				>
					<Grid container spacing={2} alignItems="center">
						<Grid item xs={12} lg={5} style={{ padding: 10 }}>
							<SecThree />
						</Grid>
						<Grid item xs={12} lg={7} style={{ padding: 10 }}>
							<SecSlider />
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default TheardThree;
