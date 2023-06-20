import { Controller } from "./controller";
import { AppModule } from "./app";

async function bootstrap() {
  const controller = new Controller();
  const app = new AppModule(controller);
  app.listen(3000);
  console.log("Running API server at http://localhost:3000");
}

bootstrap();
