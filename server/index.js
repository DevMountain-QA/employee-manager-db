const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()

const ec = require('./controllers/employeeController');

const app = express();
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );


app.use(bodyParser.json());
app.use(cors());

app.get('/api/employees', ec.list)
app.post('/api/employees', ec.hire)
app.put('/api/employees/:id', ec.update)
app.delete('/api/employees/:id', ec.delete)

const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`Server going nuts on port ${port}`); });