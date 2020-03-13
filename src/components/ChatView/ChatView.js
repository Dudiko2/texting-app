import React from "react";
import { connect } from "react-redux";
import Message from "../Message/Message";
import Styles from "./ChatView.module.css";
import { v4 as uuidv4 } from "uuid";

const View = ({ messageBoard, username }) => {
	return (
		<div className={Styles.View}>
			{messageBoard.map((msgObj, index) => {
				const last = messageBoard.length === index + 1;
				const me = username === msgObj.user;
				return <Message last={last} me={me} msg={msgObj} key={uuidv4()} />;
			})}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		messageBoard: state.messageBoard,
		username: state.username
	};
};

export default connect(mapStateToProps)(View);
