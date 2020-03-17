import * as actionTypes from "./actions";

const initialState = {
	txtValue: "",
	messageBoard: [],
	username: `User${Math.floor(Math.random() * 1000)}` // change it to something better once you add support for usernames
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_INPUT:
			return {
				...state,
				txtValue: action.text
			};

		case actionTypes.EMPTY:
			return state;

		case actionTypes.CREATE_MESSAGE:
			action.e.preventDefault();

			return {
				...state,
				txtValue: "",
				messageBoard: [...state.messageBoard].concat(action.msgObj)
			};

		case actionTypes.MESSAGE_RECEIVED:
			return {
				...state,
				messageBoard: [...state.messageBoard].concat(action.msgObj)
			};
		default:
			return state;
	}
};

export default reducer;
