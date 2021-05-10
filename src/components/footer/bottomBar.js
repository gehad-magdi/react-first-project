import React from "react";
import { Container, Grid } from "@material-ui/core";

class BottomBar extends React.Component {
	render() {
		return (
			<Container>
				<Grid container alignItems="center" justify="center">
					<Grid item xl={10} sm={12}>
						Hello{" "}
					</Grid>
				</Grid>
			</Container>
		);
	}
}
export default BottomBar;
