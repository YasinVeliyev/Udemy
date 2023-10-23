import { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Navigate } from "react-router-dom";

class Post extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	static propTypes = {
		post: PropTypes.object,
		deletePost: PropTypes.func,
	};

	handleClick() {
		this.props.deletePost(this.props.post.id);
		window.location.pathname = "/";
	}

	render() {
		return (
			<div className="container">
				<div className="card blue-grey darken-1">
					{this.props?.post ? (
						<>
							<div className="card-content white-text">
								<span className="card-title">{this.props?.post.title}</span>
								<p>{this.props?.post.body}</p>
							</div>
							<div className="card-action">
								<button type="button" className="btn btn-gray" onClick={this.handleClick}>
									Delete post
								</button>
							</div>
						</>
					) : (
						<span className="card-title white-text">Loading ...</span>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	let { pathname } = window.location;

	let id = pathname.split("/").reverse()[0];
	return { post: state.posts.filter((post) => post.id == id)[0] };
};

const mapSispatchToProps = (dispatch) => {
	return { deletePost: (id) => dispatch({ type: "DELETE_POST", id }) };
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapSispatchToProps)(Post);
