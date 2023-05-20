const express = require('express');
const app = express();

const movies = require('./moviesdb.json');

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get('/', function(req,res){
    res.send('API Catálogo de filmes disponível');
});


app.post('/api', function(req,res){
    var texto = req.body.texto;
    res.json({texto_enviado: texto + ' test api'});
});


app.get('/api/movies', function(req,res){
    res.json({listmovies: movies});
});

app.listen(3000, function(){
    console.log('App rodando na porta 3000!');
});