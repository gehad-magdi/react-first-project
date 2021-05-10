import React from "react";
import FirstImage from "../../assets/images/Image.svg";

class Image extends React.Component {
	render() {
		return (
			<div className="sectionInner">
				<img src={FirstImage} alt={"loading"}></img>
			</div>
		);
	}
}
export default Image;
