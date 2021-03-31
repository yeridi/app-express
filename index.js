var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/saludo',c_saludo);

function  c_inicio(req,res) {
    res.send('<h1>First program</h1>')
}
function  c_saludo(req,res) {
    res.send('<h1>Hello Express From Yeridi</h1>')
}

function c_server(req,res){
    console.log('por:8000');
}
var server = app.listen(8000,c_server);