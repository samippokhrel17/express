var express = require('express');

var products = require('./routes/products');
var users = require('./routes/users');
var items = require('./routes/items');

var app = express()

app.use('/products',products);
app.use('/users',users);
app.use('/items',items);


app.listen(4000,(error)=>{
    if(error){
        console.log("error runung server",error);
    }
    else{
        console.log("server running")
    }
});


