import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { Controller } from "./controller";
import { resolver } from "./resolver";
import { schema } from "./schema";

export class AppModule {
  app = express();

  constructor(controller: Controller) {
    this.allowCors();
    this.app.use(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        rootValue: resolver,
        graphiql: true,
      })
    );
    this.app.use(controller.index.route, controller.index.function);
  }

  allowCors() {
    this.app.use(cors());
  }

  listen(port: number) {
    this.app.listen(port);
  }
}
