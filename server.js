// Require express, path and stores the routes in variable api
const express = require("express");
const path = require("path");
const api = require("./routes/index.js");
const app = express();

const PORT = process.env.port || 3001;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middleware to launch homepage
app.use(express.static("public"));
// Route to index in routes
app.use("/api", api);
// Route to notes.html page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/pages/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
