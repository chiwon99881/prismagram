require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan"; //logger 미들웨어 즉, 콘솔에 찍어주는 거라고 보면됨 행동하나하나를
import schema from "./schema";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema
});

server.express.use(logger("dev")); //미들웨어 추가 (graphql server는 express서버가 내장되어있음)

server.start({ port: PORT }, () =>
  console.log(`😍  Server running on Port http://localhost:${PORT}`)
);