import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./componenets/Home";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Navbar from "./componenets/Navbar";
import Post from "./componenets/Post";

import "./App.css";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/posts/:post_id" element={<Post />} />
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;
