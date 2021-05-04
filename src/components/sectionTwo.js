import React from "react";
import Content from "./SectionTwoInnerTwo";
import Image from "./SectionTwoInnerOne";
import { Container, Grid } from "@material-ui/core";

class MainContainer extends React.Component {
	render() {
		return (
			<Container>
				<Grid
					container
					spacing={2}
					alignItems="center"
					className={this.props.className}
				>
					<Grid xs={12} lg={4} style={{ padding: 10 }}>
						<Image />
					</Grid>
					<Grid className="mainContent" xs={12} lg={8} style={{ padding: 10 }}>
						<Content className="Content" />
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default MainContainer;
