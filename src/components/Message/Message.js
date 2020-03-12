import React from "react";

import Styles from "./Message.module.css";

const Message = ({ msg, me = false }) => {
	let cls = "";
	if (me) cls = ` ${Styles.Me}`;

	return (
		<div className={Styles.MessageCont + cls}>
			<div className={Styles.Message}>
				<div className={Styles.Content}>
					<p className={Styles.Username}>{msg.user}</p>
					<p>{msg.text}</p>
				</div>
				<div className={Styles.MessageBG}></div>
			</div>
		</div>
	);
};

export default Message;
