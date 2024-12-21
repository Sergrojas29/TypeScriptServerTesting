import express, {NextFunction, Request, Response}  from "express";

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;


app.get("/", (req:Request, res:Response) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});