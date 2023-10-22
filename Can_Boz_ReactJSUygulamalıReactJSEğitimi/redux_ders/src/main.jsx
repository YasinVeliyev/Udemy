import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App.jsx";
import "./index.css";
import reducer from "./reducers";

// eslint-disable-next-line no-unused-vars
let store = configureStore({ reducer });

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
	</Provider>,
);
