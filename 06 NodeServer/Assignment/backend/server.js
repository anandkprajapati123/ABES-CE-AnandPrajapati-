const express = require("express");
const fs = require("fs");
const os = require("os");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Total memory
app.get("/total-memory", (req, res) => {
  res.send({ memory: os.totalmem() });
});

// Free memory
app.get("/free-memory", (req, res) => {
  res.send({ memory: os.freemem() });
});

// Create file
app.get("/create-file", (req, res) => {
  fs.writeFileSync("test.txt", "Hello from NodeJS fs module");
  res.send({ message: "File created successfully!" });
});

// Copy file
app.get("/copy-file", (req, res) => {
  fs.copyFileSync("test.txt", "copy.txt");
  res.send({ message: "File copied successfully!" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
