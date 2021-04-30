const express = require("express");
const cors = require("cors");
require('dotenv').config()

const app = express();

//parse requests of content-type application/json
app.use(express.json())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

var corsOptions = {
  origin: 'http://localhost:8080'
}
// use cors options
app.use(cors(corsOptions))

//
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


const feedback = require('./app/routes/feedback')
app.use('/api/feedback', feedback)

const usuario = require('./app/routes/usuario')
app.use('/api/usuario', usuario)

const respuesta = require('./app/routes/respuesta')
app.use('/api/respuesta', respuesta)

const area = require('./app/routes/areas')
app.use('/api/areas', area)

const subarea = require('./app/routes/subareas')
app.use('/api/subareas', subarea)

// listening port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});