import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("fdfer");
});

app.get("/api/jokes", (req, res) => {
  let jokes = [
    { id: 1, title: "first joke", content: "this is first joke" },
    { id: 2, title: "second joke", content: "this is second joke" },
    { id: 3, title: "third joke", content: "this is third joke" },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("4r4");
});
