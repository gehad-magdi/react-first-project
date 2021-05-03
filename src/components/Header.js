import React from "react";
import Logo from "../assets/images/Logo.svg";

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<img src={Logo} alt="logo" />
			</div>
		);
	}
}
export default Header;
