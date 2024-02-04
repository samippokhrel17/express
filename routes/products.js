var express = require("express");

var router = express.Router();

// path - /products
router.get("/",(req,res)=>{
    res.send("get request for product")
})

// /products/get-product-details
router.get('/get-product-details',(req,res)=>{
    res.send("get request for  Specific products");
});

module.exports = router;
