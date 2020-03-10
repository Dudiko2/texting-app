import React from "react";
import Styles from "./TextInput.module.css";

const TextInput = ({ onSubmit, onInputChange, txtValue }) => {
	return (
		<form className={Styles.Form} onSubmit={onSubmit}>
			<input
				className={Styles.Input}
				type="text"
				placeholder="Write a message..."
				value={txtValue}
				onChange={onInputChange}
			/>
			<button className={Styles.Button} type="submit">
				Send
			</button>
		</form>
	);
};

export default TextInput;
