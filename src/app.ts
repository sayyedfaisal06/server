import express, { Express, Request, Response } from "express";
import compression from "compression";
import cors from "cors";

export const configureApp = (app: Express): void => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(compression());

  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });
};
