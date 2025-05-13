const express = require("express");

const cors = require("cors")

const dotenv = require ("dotenv")

const {readdirSync} = require("fs")

const morgan = require("morgan")


const app = express();

app.use(morgan("dev"))

app.use(cors({
    origin: process.env.CLIENT_URL,

}));
