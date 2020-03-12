const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
	res.send("hey");
});

io.on("connection", function(socket) {
	console.log("a user connected ", socket.id);

	socket.on("chat-message", msgObj => {
		console.log(`message: ${msgObj.text}\nat: ${msgObj.time}`);
		socket.broadcast.emit("chat-message", msgObj);
	});

	socket.on("disconnect", () => console.log("a user disconnected"));
});

server.listen(PORT, function() {
	console.log(`Running on ${PORT}`);
});
