// Redux
import { connect } from "redux";
//Components
import Calendar from "../components/Calendar";

const mapStateToProps = state => {
	return {
		appointments: state.appointments
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps)(Calendar);
