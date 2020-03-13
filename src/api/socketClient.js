import io from "socket.io-client";

const socket = io();

const emitChatMessage = msgObj => socket.emit("chat-message", msgObj);

export { socket, emitChatMessage };
