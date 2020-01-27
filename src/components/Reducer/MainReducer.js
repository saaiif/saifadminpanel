const initialState = {
	loggedInStatus: localStorage.getItem('userLoggedInStatus') === 'true',
	userField: false,
	passwordField: false,
	pdtnameField: false,
	descField: false,
	categoryField: false,
	dateField: false,
	unitsField: false,
	showPopup: false,
	updatePopup: false
};

const mainReducer = (currentState = initialState, action) => {
	switch (action.type) {
		case 'USER_LOGIN':
			localStorage.setItem('userLoggedInStatus', true);
			return { ...currentState, loggedInStatus: true };
		case 'USER_LOGOUT':
			localStorage.setItem('userLoggedInStatus', false);
			return { ...currentState, loggedInStatus: false };
		case 'USERFIELD_YES':
			return { ...currentState, userField: true };
		case 'USERFIELD_NO':
			return { ...currentState, userField: false };
		case 'PASSWORDFIELD_YES':
			return { ...currentState, passwordField: true };
		case 'PASSWORDFIELD_NO':
			return { ...currentState, passwordField: false };
		case 'PDTNAME_YES':
			return { ...currentState, pdtnameField: true };
		case 'PDTNAME_NO':
			return { ...currentState, pdtnameField: false };
		case 'DESCRIPTION_YES':
			return { ...currentState, descField: true };
		case 'DESCRIPTION_NO':
			return { ...currentState, descField: false };
		case 'CATEGORY_YES':
			return { ...currentState, categoryField: true };
		case 'CATEGORY_NO':
			return { ...currentState, categoryField: false };
		case 'DATE_YES':
			return { ...currentState, dateField: true };
		case 'DATE_NO':
			return { ...currentState, dateField: false };
		case 'UNITS_YES':
			return { ...currentState, unitsField: true };
		case 'UNITS_NO':
			return { ...currentState, unitsField: false };
		case 'SHOW_POPUP':
			return { ...currentState, showPopup: true };
		case 'HIDE_POPUP':
			return { ...currentState, showPopup: false };
		case 'SHOW_UPOPUP':
			return { ...currentState, updatePopup: true };
		case 'HIDE_UPOPUP':
			return { ...currentState, updatePopup: false };

		default:
			return { ...currentState };
	}
};

export default mainReducer;
