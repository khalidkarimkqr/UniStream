const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./lib/connection");
const { readdirSync } = require("fs");
const morgan = require("morgan");

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

connectDb();

app.use(morgan("dev"));

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

readdirSync("./routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

app.listen(port, () => console.log(`Server is running on port ${port}`));
