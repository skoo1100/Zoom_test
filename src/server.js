import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const handleListen = () => {
  console.log("하이!");
};

const handleConnection = (socket) => {
  console.log(socket);
};

//http
server.listen(3000, handleListen);
//ws
wss.on("connection", handleConnection);
