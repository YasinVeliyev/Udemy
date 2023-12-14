import { Card, CardHeader, CardContent, CardMedia } from "@mui/material";

export const Course = ({ image, title, description }) => {
	return (
		<Card>
			<CardMedia component="img" sx={{ height: 200 }} image={image} alt={title} title={title} />
			<CardContent>
				<p>{description}</p>
			</CardContent>
		</Card>
	);
};
