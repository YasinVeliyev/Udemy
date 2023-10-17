import { useParams } from "react-router-dom";

const News = () => {
	console.log(useParams());
	return (
		<div>
			<h1>Yeni Sayfa</h1>
		</div>
	);
};
export default News;
