const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology:true})
.then(() => {
    console.log('Mongo connection open.')
})
.catch((err) => {
    console.log('Mongo connection error')
    console.log(err);
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('Woof ')
}) 


app.listen(3000, ()=> {
    console.log('Server running on Port 3000')
})