import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Input, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function MultilineTextFields() {
	const classes = useStyles();
	const [value, setValue] = React.useState();
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const valueOfInput = (e) => {
		e.preventDefault();
	};
	return (
		<form className={classes.root} noValidate autoComplete="off">
			<Container>
				<Grid container alignItems={"center"} justify={"center"}>
					<Grid item sm={12} lg={12}>
						<Input
							id="standard-multiline-flexible"
							multiline
							rowsMax={4}
							value={value}
							placeholder={"enter your email here"}
							onChange={handleChange}
						/>
					</Grid>
					<Grid item sm={12} lg={12}>
						<Button type={"submet"} onClick={valueOfInput}>
							Send
						</Button>
					</Grid>
				</Grid>
			</Container>
		</form>
	);
}
