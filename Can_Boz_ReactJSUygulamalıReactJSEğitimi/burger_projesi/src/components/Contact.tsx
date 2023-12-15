import "../styles/Contact.css";
import Banner from "../assets/banner.png";
export const Contact = () => {
	return (
		<div className="contact">
			<section className="leftSide" style={{ backgroundImage: `url(${Banner})` }}></section>
			<section className="rightSide">
				<h1>Bizimle Iletişime Geçin</h1>
				<form action="">
					<label>Ad,Soyad</label>
					<input type="text" name="name" id="name" placeholder="Adiniz ve soyadiniz girin" />
					<label>Email</label>
					<input type="email" name="emai" id="email" placeholder="Emaili girin" />
					<label>Mesajiniz</label>
					<textarea name="message" id="" cols={30} rows={10} placeholder="Mesaji daxil edin"></textarea>
					<button>Gönder</button>
				</form>
			</section>
		</div>
	);
};
