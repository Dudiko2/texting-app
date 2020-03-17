import io from "socket.io-client";

const rootURL =
	process.env.NODE_ENV === "production" ? null : "http://localhost:8080/";
const socket = io(rootURL);

const emitChatMessage = msgObj => socket.emit("chat-message", msgObj);

export { socket, emitChatMessage };
