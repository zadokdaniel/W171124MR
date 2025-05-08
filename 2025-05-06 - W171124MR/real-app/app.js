require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");

const morgan = require("morgan");

const app = express();

const path = require("node:path");
app.use("/public", express.static(path.resolve(__dirname, "./static")));

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/users", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/cards", require("./routes/cards"));

const PORT = process.env.PORT ?? 3000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  })
  .catch((err) => console.log("Could not connect to DB", err));
