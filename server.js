import express from "express";
import rootRouter from "./routes/root.js";
import ejs from "ejs";

const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.static("public"));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Routes
app.use("/", rootRouter);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
