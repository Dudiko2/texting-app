import React from "react";
import Message from "../Message/Message";
import Styles from "./ChatView.module.css";
import { v4 as uuidv4 } from "uuid";

const View = ({ messageBoard = [], username }) => {
	return (
		<div className={Styles.View}>
			{messageBoard.map(msgObj => {
				const me = username === msgObj.user;
				return <Message me={me} msg={msgObj} key={uuidv4()} />;
			})}
		</div>
	);
};

export default View;
