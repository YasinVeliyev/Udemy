import { Component } from "react";
import { PropTypes } from "prop-types";
const LoaderHoc = (ReactComponent) => {
	return class LoaderHoc extends Component {
		static propTypes = { users: PropTypes.array };
		render() {
			return this.props.users.length === 0 ? (
				<span className="logo">
					Loading <i className="circle notch icon"></i>
				</span>
			) : (
				<ReactComponent {...this.props} />
			);
		}
	};
};

export default LoaderHoc;
