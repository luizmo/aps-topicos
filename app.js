const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const db = require('./config/database');
const routes = require('./routes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connectToServer()
  .then(()=>{
    app.use('/',routes());
    server.listen(5000, () =>{
      console.log('Server is running...');
    })
  })
  .catch((err)=>{
    console.log('Não foi possível conectar ao banco.',err);
  });

