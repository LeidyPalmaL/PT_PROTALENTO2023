const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.static('public'))
app.use(morgan('combined'))
app.get('/home', function(req, res){
    res.send('<h1>Bienvenido al mejor sitio de películas en la región</h1>')
})
app.get('/api/movie', function(req, res){
    res.send('<h2>EL CATÁLOGO DE PELÍCULAS AÚN ESTÁ EN CONSTRUCCIÓN</h2>')
})
app.get('/api/cines', function(req, res){
    res.send('<h1>EL CATÁLOGO DE CINES AÚN ESTÁ EN CONSTRUCCIÓN</h1>')
})

app.get('/api/movie/expoferia', function(req, res){
    res.send('<h1>GRAN ESTRENO DE LA NUEVA TEMPORADA DE BETTY LA FEA</h1> <img src="/images/OIP.jpg" alt="Foto de Betty y don Armando">')
})

app.listen(3000)