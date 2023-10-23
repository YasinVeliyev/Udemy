import { Component } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = { posts: PropTypes.array };

	render() {
		const postList = this.props.posts.length ? (
			<div className="d-flex flex-column">
				{this.props.posts.map((post) => (
					<div className="card blue-grey darken-1" key={post.id}>
						<div className="card-content white-text">
							<Link to={`/posts/${post.id}`}>
								<span className="card-title">{post.title}</span>
							</Link>

							<p>{post.body}</p>
						</div>
						<div className="card-action"></div>
					</div>
				))}
			</div>
		) : (
			<h2 className="center card-title">No post to show</h2>
		);
		return (
			<div className="container-fluid">
				<h4 className="center">Home</h4>
				{postList}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { posts: state.posts };
};

export default connect(mapStateToProps)(Home);
