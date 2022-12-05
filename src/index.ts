import cors from "cors";
import express from "express";
import swaggerUi from 'swagger-ui-express'

import usersRouter from "./users/route";
import transactionsRouter from "./transactions/route";
import swaggerDocument from '../swagger.json'

const server = express()

server.use(
  cors({
    origin: ["http://localhost:3333"],
  })
  );
  server.use(express.json());

server.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

server.get("/", (req, res) => {
  res.send("Server Up!");
});

server.use("/user", usersRouter);
server.use("/transaction", transactionsRouter);

server.listen(3333, () => {
  console.log("Server started on port http://localhost:3333");
  console.log("Documentation started on http://localhost:3333/api-docs");
});
