import * as actionTypes from "./actions";
import { emitChatMessage } from "../api/socketClient";

const initialState = {
	txtValue: "",
	sent: []
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
			const msgObj = { text: action.text, time: new Date() };
			emitChatMessage(msgObj);

			return {
				...state,
				txtValue: "",
				sent: [...state.sent].concat(msgObj)
			};
		default:
			return state;
	}
};

export default reducer;
