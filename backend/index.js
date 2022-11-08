//const express = require('express')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //we use cors to access our outside the domain
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();

const port = process.env.PORT || 8000;

// Importing user route
const router = require('./routes/users.js');
// const router = require('router')

// const bodyParser = require('body-parser')
// async and abate is used to get data from api
const uri = process.env.ATLAS_URI; // server path is stored in the variable these lines connect to db
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('connected to db');
});

app.use(cors());
app.use(express.json());

const AdminRouter = require('../routes/admin');

app.use('/admin', AdminRouter);

app.use(bodyParser.json());
// Adding a Router
app.use('/users', router);

app.get('/', (req, res) => {
  res.send('Hello Universe!');
});

app.get('/todos', (req, res) => {
  res.send('A list of todo items will be returned');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Posting a Request');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
