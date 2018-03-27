const express = require('express');
const bodyParser = require('body-parser');

const ec = require('./controllers/employeeController');


const app = express();

app.use( bodyParser.json() );

app.get('/api/employees', ec.list)
app.post('/api/employees', ec.hire)
app.put('/aip/employees/:id', ec.update)
app.delete('/api/employees/:id', ec.delete)

const port = 3000;
app.listen( port, () => { console.log(`Server going nuts on port ${port}`); } );