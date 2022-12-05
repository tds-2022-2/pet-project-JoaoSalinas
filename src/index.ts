import cors from "cors";
import express from "express";

import usersRouter from "./users/route";
import transactionsRouter from "./transactions/route";

const server = express()

server.use(
  cors({
    origin: ["http://localhost:3333"],
  })
);
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Server Up!");
});

server.use("/user", usersRouter);
server.use("/transaction", transactionsRouter);

server.listen(3333, () => {
  console.log("Server started on port 3333");
});
