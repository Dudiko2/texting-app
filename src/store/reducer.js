import * as actionTypes from "./actions";
import { emitChatMessage } from "../api/socketClient";

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
		case actionTypes.SEND_MESSAGE:
			action.e.preventDefault();
			const msgObj = {
				text: action.text,
				time: new Date(),
				user: state.username
			};
			emitChatMessage(msgObj);

			return {
				...state,
				txtValue: "",
				messageBoard: [...state.messageBoard].concat(msgObj)
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
