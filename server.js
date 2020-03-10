const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
	res.send("hey");
});

io.on("connection", function(socket) {
	console.log("a user connected");

	socket.on("chat-message", msgObj => {
		console.log(`message: ${msgObj.text}\nat: ${msgObj.time}`);
	});

	socket.on("disconnect", () => console.log("a user disconnected"));
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, function() {
	console.log(`Running on ${PORT}`);
});
