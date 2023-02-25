const express = require('express')
const morgon = require('morgan')

const app = express();

const { getsPort }  = require("./routes/post");

// Creating my own middleware
const testmiddleware = (req, res, next) => {
    console.log("Testing middleware")
    next()
};

app.use(morgon("dev"));
app.use(testmiddleware);

app.get("/", getsPort);

const port = 8080;
app.listen(port, () => {
    console.log(`The API is listening on port: ${port}`)
});
