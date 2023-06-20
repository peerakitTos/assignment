import { Request, Response } from "express";

export class Controller {
  constructor() {}

  index = {
    route: "/",
    function: (req: Request, res: Response) => {
      res.send("Hello, World!");
    },
  };
}
