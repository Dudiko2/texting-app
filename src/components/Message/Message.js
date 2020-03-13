import React from "react";

import Styles from "./Message.module.css";

const Message = ({ msg, me = false, last }) => {
	const myMsgCls = me ? ` ${Styles.Me}` : "";
	const slideLast = last ? " slide-top" : "";

	return (
		<div className={Styles.MessageCont + myMsgCls}>
			<div className={Styles.Message + slideLast}>
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
