import { Component } from "react";
import { PropTypes } from "prop-types";
import Image from "./Image";

export default class Images extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = { images: PropTypes.array };
	render() {
		return (
			<div className="imageList">
				{this.props.images.map((image, index) => {
					return <Image image={image} key={index} id={index} />;
				})}
			</div>
		);
	}
}
