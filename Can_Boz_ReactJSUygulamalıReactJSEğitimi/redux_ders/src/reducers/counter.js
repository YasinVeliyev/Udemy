const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case "Increment":
			return ++state;

		case "Decrement":
			return --state;
		default:
			return state;
	}
};

export default counterReducer;
