const fs = require('fs')
const express = require('express');

const app = express();
const employees = ("./data.json")
fs.readFile('./data.json', 'utf8',(err,data)=>{
    app.get('/', function(req,res){
        res.send(data)
    });
})

app.listen(3000, function() {
    console.log('Server is worked')
})