import { Router } from "express";
import songRouter from "./songRouter";

const router = Router();

router.use("/song/", songRouter);
