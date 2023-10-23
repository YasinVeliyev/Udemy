import { useParams } from "react-router-dom";

// eslint-disable-next-line react/display-name
const withRouter = (WrappedComponent) => (props) => {
	const params = useParams();
	return <WrappedComponent {...props} params={params} />;
};

export default withRouter;
