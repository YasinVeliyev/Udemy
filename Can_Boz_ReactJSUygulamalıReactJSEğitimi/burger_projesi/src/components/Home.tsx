import { Link } from "react-router-dom";
import Banner from "../assets/banneryeni.jpg";
import "../styles/Home.css";

export const Home = () => {
	return (
		<div className="mainPage" style={{ backgroundImage: `url(${Banner})` }}>
			<div className="order">
				<Link to="/menu">
					<button>Sifariş Ver</button>
				</Link>
			</div>
		</div>
	);
};
