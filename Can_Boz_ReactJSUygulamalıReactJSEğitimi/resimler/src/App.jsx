import { Component } from "react";
import SearchBar from "./components/SearchBar";
import Images from "./components/Images";
import "./App.css";
import axios from "axios";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { images: [], page: 1 };
		this.searchImage = this.searchImage.bind(this);
	}
	async searchImage(search) {
		try {
			const {
				data: { results },
			} = await axios.get(`https://api.unsplash.com/search/photos`, {
				headers: { authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}` },
				params: { page: this.state.page, query: search, per_page: 10 },
			});
			this.setState(() => {
				return { images: results };
			});
		} catch (error) {
			console.error(error);
		}
	}
	componentDidMount() {
		document.addEventListener("scroll", this.getNextPage);
	}
	// getNextPage() {
	// 	this.setState({ page: Math.ceil(document.body.scrollHeight / (window.pageYOffset + document.body.clientHeight)) });

	// 	this.searchImage(this.state.search);
	// }

	render() {
		return (
			<div className="App">
				<SearchBar searchImage={this.searchImage} />
				<Images images={this.state.images} />
			</div>
		);
	}
}

export default App;
