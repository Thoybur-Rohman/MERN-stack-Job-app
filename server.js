const express = require("express");

const app = express();
const db = require("./db.js");
const jobsRoute = require('./Roots/jobsRoute')

app.use('/api/jobs/' , jobsRoute)



const port = process.env.PORT || 5000;

app.listen(port,() => console.log("Server is running"));