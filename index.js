var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/clientes',c_clientes);
app.get('/productos',c_productos);

function  c_inicio(req,res) {
    res.send('<h1>Main Page</h1>')
}
function c_clientes(req,res){
    res.send('<ul><li>Juan Carlos</li><li>Bodoque</li><li>Tulio Triviño</li></ul>')
}
function  c_productos(req,res) {
    res.send('<ul><li>Papa</li><li>Lechuga</li><li>Tomate</li></ul>');
}

function c_server(req,res){
    console.log('por:8000');
}
var server = app.listen(8000,c_server);