import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";
import cookieSession from "cookie-session";
import { Server } from "@overnightjs/core";

export class ServerApp extends Server {
  constructor() {
    super(true);
    this.app.use(morgan("tiny"));
    this.app.use(bodyParser.json());
    this.app.use(cors({ origin: true, credentials: true }));
    this.app.use(
      cookieSession({
        keys: ["secret"],
        signed: false,
        secure: false,
        httpOnly: true,
      })
    );
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log("started");
    });
  }
}
