import React from "react";

const Card = ({ children }) => {
	console.log(children);
	return (
		<div className="ui card">
			<div className="content">{children}</div>
			<div className="extra content">
				<span className="left floated like">
					<i className="like icon"></i>
					Bəyən
				</span>
				<span className="right floated star">
					<i className="star icon"></i>
					Sevimli
				</span>
			</div>
		</div>
	);
};

export default Card;
