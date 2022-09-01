import { Server } from "ws";
const PORT = Number(process.env.PORT || 4000);
const ws = new Server({ port: PORT });

ws.on("connection", (client) => {
  client.on("message", (message) => {
    console.log("Received: " + message);
    client.send(message.toString() + " from server");
  });
});
