import { Router } from "express";

const rootRouter = Router();

rootRouter.get("/", (req, res) => {
  res.render("index", { title: "home" });
});

export default rootRouter;
