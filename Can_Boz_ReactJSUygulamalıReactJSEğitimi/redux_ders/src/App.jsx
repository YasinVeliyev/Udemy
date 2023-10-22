import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	console.log(counter);
	return (
		<div className="App">
			<h1>Counter {counter}</h1>
			<div className="container">
				<button onClick={() => dispatch(increment())} className="btn btn-info mx-5">
					Increment
				</button>
				<button onClick={() => dispatch(decrement())} className="btn btn-info">
					Decrement
				</button>
			</div>
		</div>
	);
}

export default App;
