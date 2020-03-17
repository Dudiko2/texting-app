import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import TextInput from "../../components/TextInput/TextInput";
import ChatView from "../../components/ChatView/ChatView";
import { socket } from "../../api/socketClient";
import Styles from "./Chat.module.css";

class Chat extends Component {
	state = {
		height: window.innerHeight
	};

	componentDidMount() {
		socket.on("chat-message", msgObj => this.props.onMessageReceived(msgObj));
		console.log("Chat mounted");
		window.addEventListener("resize", () =>
			this.setState({ height: window.innerHeight })
		);
	}

	componentWillUnmount() {
		window.removeEventListener("resize");
	}

	render() {
		return (
			<div className={Styles.ChatGrid} style={{ height: this.state.height }}>
				<ChatView />
				<TextInput
					onSubmit={e =>
						this.props.onSendMessage(
							e,
							this.props.txtValue,
							this.props.username
						)
					}
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
		username: state.username
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onInputChange: text => dispatch(actions.changeInput(text)),
		onSendMessage: (e, text, username) =>
			dispatch(actions.sendMessage(e, text, username)),
		onMessageReceived: msgObj => dispatch(actions.messageReceived(msgObj))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
