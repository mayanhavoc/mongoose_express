const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology:true})
.then(() => {
    console.log('Mongo connection open.')
})
.catch((err) => {
    console.log('Mongo connection error')
    console.log(err);
})

