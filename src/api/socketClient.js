import io from "socket.io-client";

const socket = io("http://localhost:8080/");

const emitChatMessage = msgObj => socket.emit("chat-message", msgObj);

export { socket, emitChatMessage };
