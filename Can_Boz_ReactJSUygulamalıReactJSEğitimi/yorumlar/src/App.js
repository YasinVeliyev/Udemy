import React, { useEffect, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";
import Comment from "./Comment";
import Card from "./Card";

const App = () => {
	let [posts, setPosts] = useState([]);
	let [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((posts) => posts.json())
			.then(setPosts);
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((users) => users.json())
			.then(setUsers);
	}, []);
	// async () => {
	//   let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
	//   setPosts(await posts.json())
	//   let users = await fetch("https://jsonplaceholder.typicode.com/users")
	//   setUsers(await users.json())
	// }

	return (
		<div className="ui comments" style={{ padding: "10px" }}>
			{posts.slice(1, 10).map((post, index) => {
				let name = users.filter((user) => user.id === post.userId)[0].name;
				return (
					<Card>
						<Comment
							key={index}
							name={name}
							timeAgo={Math.round(Math.random() * 10)}
							comment={post.title}
							avatar={faker.image.avatar()}
							star={Math.round(Math.random() * 10)}
						/>
					</Card>
				);
			})}
		</div>
	);
};

export default App;
