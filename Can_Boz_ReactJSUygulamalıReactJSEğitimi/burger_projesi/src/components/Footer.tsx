import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import "../styles/Footer.css";

export const Footer = () => {
	return (
		<div className="footer">
			<div className="socialMedia">
				<Facebook />
				<Instagram />
				<Twitter />
			</div>
			<p>Tüm hakları saklıdır|Burger Yiyelim</p>
		</div>
	);
};
