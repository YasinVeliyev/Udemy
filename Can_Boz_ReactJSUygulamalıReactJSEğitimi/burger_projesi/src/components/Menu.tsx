import { MenuItem } from "../components/MenuItem";
import { Data } from "../helpers/Data";

export const Menu = () => {
	return (
		<section className="menu">
			<h1 className="menuTitle">Burgerlerimiz</h1>
			<section className="menuList">
				{Data.map((burger, index) => {
					return <MenuItem image={burger.image} name={burger.name} content={burger.content} price={burger.price} key={index} />;
				})}
			</section>
		</section>
	);
};
