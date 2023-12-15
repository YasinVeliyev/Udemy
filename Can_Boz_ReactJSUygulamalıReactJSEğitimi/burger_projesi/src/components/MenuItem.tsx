import "../styles/Menu.css";

interface BurgerMenu {
	name: string;
	price: number;
	image: string;
	content: string;
}

export const MenuItem = ({ image, name, content, price }: BurgerMenu) => {
	return (
		<article className="menuItem">
			<div style={{ backgroundImage: `url(${image})` }}></div>
			<h1>{name}</h1>
			<h6>{content}</h6>
			<i>{price} Tl</i>
		</article>
	);
};
