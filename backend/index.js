const express = require("express"); // import express
const app = express(); // to initialize the app
const cors = require("cors"); // to avoid cors
const db = require("./db.json"); // dummy database
app.use(express.json()); // use express body-parser middleware
app.use(cors());

app.post("/api/login", (req, res) => {
  const data = req.body;
  console.log(data);
  for (let i = 0; i < db.length; i++) {
    if (db[i].name === data.name && db[i].password === data.password) {
      return res.json({ message: "true" });
    }
  }
  return res.send({ message: "false" }).status(401);
});

app.listen(8000, () => {
  console.log("server is running.....");
});
