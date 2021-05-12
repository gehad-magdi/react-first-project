import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Input, Button } from "@material-ui/core";

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
	// let forms= new FormData(e.target)

	const valueOfInput = (e) => {
		e.preventDefault();
	};
	return (
		<form
			className={classes.root}
			noValidate
			autoComplete="off"
			onSubmit={valueOfInput}
		>
			<Grid container alignItems={"center"} justify={"center"}>
				<Grid item sm={12} lg={12}>
					<Input
						id="standard-multiline-flexible"
						multiline
						rowsMax={4}
						value={value}
						placeholder={"enter your email here"}
						onChange={handleChange}
						style={{ width: "100%" }}
					/>
				</Grid>
				<Grid item sm={12} lg={12}>
					<Button
						className="buttonFooter"
						type={"submet"}
						style={{
							width: "100%",
							height: 50,
							margin: "20px 0",
							color: "var(--white-color)",
							backgroundColor: "var(--black-color)",
							fontSize: "12px",
							fontWeight: "bolder",
							borderRadius: "10px",
						}}
					>
						Send
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}
