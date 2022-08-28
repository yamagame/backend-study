import express, { Request, Response } from "express";

const PORT = process.env.PORT ?? 3000;
const MESSAGE = process.env.MESSAGE ?? "Hello World from app";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", async (req: Request, res: Response) => {
  res.send({
    message: MESSAGE,
  });
});

app.listen(PORT, () => {
  console.log(`Start example server`);
  console.log(`http://localhost:${PORT}`);
});

process.once("SIGTERM", async () => {
  console.log("SIGTERM received.");
  process.exit();
});

process.once("SIGINT", async () => {
  console.log("SIGINT received.");
  process.exit();
});
