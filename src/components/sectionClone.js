import React from "react";
import Clones from "./cloneSection";
// import {ReactDom as White} from './images/white-marble-effect-matt-porcelain-wall-and-floor-tile-105.svg'
// import {ReactDom as Fox} from './images/Fox+Stairs.svg'
import White from "../assets/images/white-marble-effect-matt-porcelain-wall-and-floor-tile-105.svg";
import Fox from "../assets/images/Fox+Stairs.svg";
import { Container, Grid } from "@material-ui/core";

class CloneSection extends React.Component {
	render() {
		return (
			<Container style={{ paddingTop: 100, paddingBottom: 100 }}>
				<div className="rowClone">
					<h1 className="content">Projects</h1>
					<p className="content">How We effected!</p>
					<div className="innerClone"></div>
				</div>
				<Grid container spacing={2} alignItems="center">
					<Grid xs={12} lg={6} style={{ padding: 10 }}>
						<Clones
							image={White}
							title=" Athens Gold Marble"
							typo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
						/>
					</Grid>
					<Grid xs={12} lg={6} style={{ padding: 10 }}>
						<Clones
							image={Fox}
							title=" Athens Gold Marble"
							typo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
						/>
					</Grid>
				</Grid>
			</Container>
		);
	}
}
export default CloneSection;
