import { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
  res.json({
    message: "This is the createUser controller",
  });
};

export { createUser };
