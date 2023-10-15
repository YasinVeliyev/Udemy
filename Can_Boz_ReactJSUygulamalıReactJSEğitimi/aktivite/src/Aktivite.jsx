import { Component } from "react";

class Aktivite extends Component {
	constructor(props) {
		super(props);
		this.state = { latitude: 0, longitude: 0, error: "", aktivite: "" };
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log(position.coords.longitude);
				this.setState({ longitude: position.coords.longitude, latitude: position.coords.latitude });
				this.aktiviteyeQerarVer(this.state.latitude);
			},
			(error) => {
				console.error(error);
				this.setState({ error: error.message });
			},
		);
	}

	aktiviteyeQerarVer(lat) {
		const ay = new Date().getMonth();
		if (lat < 0) {
			if (ay > 8 || ay < 2) {
				this.setState({ aktivite: "Üzməyə gedə bilərsən" });
			} else {
				this.setState({ aktivite: "İdman zalına gedə bilərsən" });
			}
		} else {
			if (ay > 8 || ay < 2) {
				this.setState({ aktivite: "İdman zalına gedə bilərsən" });
			} else {
				this.setState({ aktivite: "Üzməyə gedə bilərsən" });
			}
		}
	}

	render() {
		return (
			<div>
				{this.state.longitude === 0 && !this.state.error ? (
					<span>Loading...</span>
				) : this.state.error ? (
					this.state.error
				) : (
					<dl>
						<dt>Uzunluq</dt>
						<dd>{this.state.longitude}</dd>
						<dt>Enlik</dt>
						<dd>{this.state.latitude}</dd>
						<dt>Aktivite</dt>
						<dd>{this.state.aktivite}</dd>
					</dl>
				)}
			</div>
		);
	}
}

export default Aktivite;
