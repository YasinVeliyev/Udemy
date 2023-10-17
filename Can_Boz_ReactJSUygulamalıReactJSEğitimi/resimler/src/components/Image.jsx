import { Component } from "react";
import { PropTypes } from "prop-types";

export default class Image extends Component {
	constructor(props) {
		super(props);
		this.state = { span: 0 };
	}
	static propTypes = { image: PropTypes.object, id: PropTypes.number };
	componentDidMount() {
		let current = document.querySelector(`.img_${this.props.id}`);

		current.addEventListener("load", () => {
			this.setState({ span: current.clientHeight + 5 });
		});
	}
	render() {
		return <img className={`img_${this.props.id}`} src={this.props.image.urls.small} style={{ gridRowEnd: `span ${this.state.span}` }} />;
	}
}
