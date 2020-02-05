const express = require('express')
const app = express()
const controller = require('./getProducts')
const products = require('../products.json')

let port = 4040

app.use(express.json())

// app.get('/api/products', controller.getProducts)

app.get('/api/products/:id', controller.getID)

app.get('/api/products', controller.getPrices)

app.listen(port, () => console.log('Server is up and running on port 4040!'))
