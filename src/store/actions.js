import { emitChatMessage } from "../api/socketClient";

export const CHANGE_INPUT = "CHANGE_INPUT";
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const MESSAGE_RECEIVED = "MESSAGE_RECEIVED";
export const EMPTY = "EMPTY";

export const changeInput = text => {
	return {
		type: CHANGE_INPUT,
		text
	};
};

export const createMessage = (e, msgObj) => {
	return {
		type: CREATE_MESSAGE,
		e,
		msgObj
	};
};

export const messageReceived = msgObj => {
	return {
		type: MESSAGE_RECEIVED,
		msgObj
	};
};

export const sendMessage = (e, text, username) => {
	if (!text.length) {
		e.preventDefault();
		return { type: EMPTY };
	}
	const msgObj = {
		text,
		timestamp: new Date(),
		user: username
	};
	return dispatch => {
		dispatch(createMessage(e, msgObj));

		emitChatMessage(msgObj); // write a promise to check if message has been sent
	};
};
