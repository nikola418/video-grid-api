import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db/db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
  // Add custom route here if needed
  rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
// Listen to port
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
export default server;
