const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  console.log("Received a GET request to /hello");
  res.json({ message: "Hello, World!" });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
