const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err){
        console.error('Could not connect to database: ', err);
    } else{
        console.log('Connected to database: ', config.db);
    }
});

app.use(express.static(__dirname+'/client/dist/'));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
    // res.send('<h1> Hello world </h1>');
});



app.listen(8080, () => {
    console.log('Listening on port 8080');
});