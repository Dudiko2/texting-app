import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import TextInput from "../../components/TextInput/TextInput";
import ChatView from "../../components/ChatView/ChatView";
import { socket } from "../../api/socketClient";
import Styles from "./Chat.module.css";

class Chat extends Component {
	componentDidMount() {
		socket.on("chat-message", msgObj => this.props.onMessageReceived(msgObj));
		console.log("Chat mounted");
	}

	render() {
		return (
			<div className={Styles.ChatGrid}>
				<ChatView
					messageBoard={this.props.messageBoard}
					username={this.props.username}
				/>
				<TextInput
					onSubmit={e => this.props.onSendMessage(e, this.props.txtValue)}
					onInputChange={e => this.props.onInputChange(e.target.value)}
					txtValue={this.props.txtValue}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		txtValue: state.txtValue,
		messageBoard: state.messageBoard,
		username: state.username
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onInputChange: text => dispatch({ type: actionTypes.CHANGE_INPUT, text }),
		onSendMessage: (e, text) =>
			dispatch({ type: actionTypes.SEND_MESSAGE, text, e }),
		onMessageReceived: msgObj =>
			dispatch({ type: actionTypes.MESSAGE_RECEIVED, msgObj })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
