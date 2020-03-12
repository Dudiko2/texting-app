import io from "socket.io-client";

const port = process.env.PORT || 8080;

const socket = io(`http://localhost:${port}/`);

const emitChatMessage = msgObj => socket.emit("chat-message", msgObj);

export { socket, emitChatMessage };
