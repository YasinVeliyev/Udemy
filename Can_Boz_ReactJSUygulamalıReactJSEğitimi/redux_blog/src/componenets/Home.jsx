import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { posts: [] };
	}

	componentDidMount() {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then(({ data: posts }) => {
				this.setState({ posts });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		const postList = this.state.posts.length ? (
			<div className="d-flex flex-column">
				{this.state.posts.map((post) => (
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
