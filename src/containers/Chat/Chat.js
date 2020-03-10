import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import TextInput from "../../components/TextInput/TextInput";

const Chat = ({ txtValue, onInputChange, onSendMessage }) => {
	return (
		<TextInput
			onSubmit={e => onSendMessage(e, txtValue)}
			onInputChange={e => onInputChange(e.target.value)}
			txtValue={txtValue}
		/>
	);
};

const mapStateToProps = state => {
	return {
		txtValue: state.txtValue
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onInputChange: text => dispatch({ type: actionTypes.CHANGE_INPUT, text }),
		onSendMessage: (e, text) =>
			dispatch({ type: actionTypes.SEND_MESSAGE, text, e })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
