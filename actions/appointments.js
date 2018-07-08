export const REQUEST_APPOINTMENTS = "REQUEST_APPOINTMENTS";
export const requestAppointments = () => {
	return {
		type: REQUEST_APPOINTMENTS
	};
};

export const APPOINTMENTS_REQUEST_SUCCESS = "APPOINTMENTS_REQUEST_SUCCESS";
export const appointmentsRequestSuccess = appointments => {
	return {
		type: APPOINTMENTS_REQUEST_SUCCESS,
		appointments: appointments
	};
};

export const APPOINTMENTS_REQUEST_FAILURE = "APPOINTMENTS_REQUEST_FAILURE";
export const appointmentsRequestFailure = () => {
	return {
		type: APPOINTMENTS_REQUEST_FAILURE,
		appointments: appointments
	};
};
