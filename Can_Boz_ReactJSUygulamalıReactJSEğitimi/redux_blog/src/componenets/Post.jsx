import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Post() {
	let params = useParams();
	const [post, setPost] = useState();

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`)
			.then(({ data: post }) => {
				setPost(post);
			})
			.catch((error) => console.error(error));
	}, [params.post_id]);

	return (
		<div className="container">
			<div className="card blue-grey darken-1">
				{post ? (
					<div className="card-content white-text">
						<span className="card-title">{post.title}</span>
						<p>{post.body}</p>
					</div>
				) : (
					<span className="card-title white-text">Loading ...</span>
				)}

				<div className="card-action"></div>
			</div>
		</div>
	);
}

export default Post;
