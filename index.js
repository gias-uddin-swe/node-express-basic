const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("why  you fro calling me??????????");
});

app.listen(3000, () => console.log("listing port 3000"));
