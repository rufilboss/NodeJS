const express = require('express')
const morgon = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')
const app = express();
const dotenv = require('dotenv')

dotenv.config()

mongoose.set('strictQuery', false);

// db
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("DB connetion: SUCCESS!"));

mongoose.connection.on('error', (err) => {
    console.log(`DB connection failed: ${err}`);
});

// Import routes 
const postRoutes  = require("./routes/post");
const aboutRoutes = require("./routes/about");

// Creating my own middleware
// const testmiddleware = (req, res, next) => {
//     console.log("Testing middleware")
//     next()
// };
// app.use(testmiddleware);

app.use(morgon("dev"));
app.use(bodyParser.json());
app.use(expressValidator());

// Routers
app.use("/", postRoutes);
app.use("/about", aboutRoutes);


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`The API is listening on port: ${port}`)
});
