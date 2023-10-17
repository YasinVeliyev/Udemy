import { Component } from "react";
import { PropTypes } from "prop-types";

export default class SearchBar extends Component {
	static propTypes = { searchImage: PropTypes.func };

	constructor(props) {
		super(props);
		this.state = { search: "" };
		this.handleChange = this.handleChange.bind(this);
		this.handleClickAndKeyDown = this.handleClickAndKeyDown.bind(this);
	}

	handleChange(event) {
		this.setState({ search: event.target.value });
	}

	handleClickAndKeyDown(event) {
		if (event.key === "Enter" || event.type === "click") {
			this.props.searchImage(this.state.search);
		}
	}

	render() {
		return (
			<div className="searchBox">
				<div className="ui fluid category search">
					<div className="ui fluid icon input">
						<input
							className="prompt"
							type="text"
							name="search"
							placeholder="Axtar..."
							value={this.state.value}
							onChange={this.handleChange}
							onKeyDown={this.handleClickAndKeyDown}
						/>
						<i className="circular search link icon" onClick={this.handleClickAndKeyDown}></i>
					</div>
					<div className="results"></div>
				</div>
			</div>
		);
	}
}
