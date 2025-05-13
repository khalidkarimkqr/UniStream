const express = require("express");

const cors = require("cors")

const dotenv = require ("dotenv")

const {readdirSync} = require("fs")

const morgan = require("morgan")


const app = express();
const port = process.env.PORT || 8000

dotenv.config()

app.use(morgan("dev"))

app.use(cors({
    origin: process.env.CLIENT_URL,

}));

app.use(express.json());

app.listen(port, () => console.log(`Server is running on port ${port}`))

