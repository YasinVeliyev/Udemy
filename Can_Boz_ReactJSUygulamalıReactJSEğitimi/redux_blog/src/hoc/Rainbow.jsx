export const Rainbow = (WrappedComponent) => {
	const colors = ["red", "green", "pink", "yellow", "blue", "black", "orange", "gray", "brown"];
	const randomCalor = colors[Math.round(Math.random() * (colors.length - 1))];
	const className = `${randomCalor}-text`;
	// eslint-disable-next-line react/display-name
	return (props) => (
		<div className={className}>
			<WrappedComponent {...props} />
		</div>
	);
};
