const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

// const multer = require('multer');
// const upload = multer({dest:'./upload'})

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

connection.connect();


app.get('/customers', (req, res) => {
  connection.query(
    'select * from bori where isDeleted = 0',
    (err,rows,fields) => {
      res.send(rows);
    }
  );
});

app.post('/customers',(req,res) => {
  let sql = 'insert into bori values (null,?,?,?,?,now(),0)';
  let name = req.body.name;
  let phoneNumber = req.body.phoneNumber;
  let doctor = req.body.doctor;
  let birthday = req.body.birthday;
  let params = [name,phoneNumber,doctor,birthday];

  connection.query(sql,params,
    (err,rows,fields) => {
      res.send(rows);
      //console.log(err);
      //console.log(rows);
    }
  );
});

app.delete('/customers/:id', (req,res)=> {
  let sql = 'update bori set isDeleted = 1 where id = ?';
  let params = [req.params.id];
  connection.query(sql,params,
      (err,rows,fields) => {
          res.send(rows);
      }
  ); 
})

app.listen(port, ()=> console.log(`Listening on port ${port}`));