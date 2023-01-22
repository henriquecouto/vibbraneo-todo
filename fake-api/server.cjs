const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const authMiddleware = require("./middlewares/auth.cjs");

server.use(authMiddleware);
server.use(middlewares);
server.use(router);

server.listen(port);
