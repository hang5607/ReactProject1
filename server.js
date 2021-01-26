const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const session = require('express-session');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

connection.connect();

app.get('/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'name': '황대건',
            'phoneNumber': '010',
            'doctor': 'dg',
            'birthDay': '900604',
            'visitDay': '20210121'
          },
          {
            'id': 2,
            'name': '나라인포',
            'phoneNumber': '010',
            'doctor': 'dg',
            'birthDay': '900604',
            'visitDay': '20210121'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

