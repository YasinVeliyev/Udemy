import React from "react";

export const Rainbow = (WrappedComponent) => {
	const colors = ["red", "green", "pink", "yellow", "blue", "black", "orange", "gray", "brown"];
	const randomCalor = colors[Math.round(Math.random() * (colors.length - 1))];
	const className = `${randomCalor}-text`;
	return (props) => (
		<div className={className}>
			<WrappedComponent {...props} />
		</div>
	);
};
