import express, { Request, Response } from "express";
import { exec } from "child_process";

const PORT = process.env.PORT ?? 3000;
const HELLO = process.env.HELLO ?? "http://localhost:4000/hello";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", async (req: Request, res: Response) => {
  exec(`curl ${HELLO}`, (err, stdout, stderr) => {
    res.send(stdout);
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
