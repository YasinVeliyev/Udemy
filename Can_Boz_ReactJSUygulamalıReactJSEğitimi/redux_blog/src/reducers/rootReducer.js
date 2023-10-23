import axios from "axios";

const initState = {
	posts: [],
};

(async () => {
	try {
		let { data: posts } = await axios.get("https://jsonplaceholder.typicode.com/posts");
		initState.posts = posts;
	} catch (error) {
		console.error(error);
	}
})();

const rootReducer = (state = initState, action) => {
	if (action.type === "DELETE_POST") {
		let newPosts = state.posts.filter((post) => post.id !== action.id);
		return { ...state, posts: newPosts };
	}
	{
		return state;
	}
};

export default rootReducer;
