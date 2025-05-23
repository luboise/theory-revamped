import { Router } from "express";

const router = Router();

router.get("/:songId/", (req, res) => {});

router.get("/methods/:songId/:chartId", (req, res) => {
  res.send();
});

export default router;
