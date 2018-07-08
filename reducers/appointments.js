const initialState = { isLoading: false, items: {} };
import {
	REQUEST_APPOINTMENTS,
	APPOINTMENTS_REQUEST_SUCCESS,
	APPOINTMENTS_REQUEST_FAILURE
} from "../actions/appointments";

const appointments = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_APPOINTMENTS:
			return Object.assign({}, state, { isLoading: true });
		case APPOINTMENTS_REQUEST_SUCCESS:
			return Object.assign({}, state, {
				isLoading: false,
				items: actions.appointments
			});
		case APPOINTMENTS_REQUEST_FAILURE:
			return Object.assign({}, state, { isLoading: false });
		default:
			return state;
	}
};

export default appointments;
