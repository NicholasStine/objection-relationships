const express = require('express');
const cors = require('cors');
const knex = require('knex');
const dbConfig = require('./knexfile').development;

const app = express();
const db = knex(dbConfig);

app.use(cors());

app.get('/', (req, res) => {
   res.json({ message: "You're in death valley" });
});

app.listen(4000, () => { console.log("Express\t:::\t4000"); });
