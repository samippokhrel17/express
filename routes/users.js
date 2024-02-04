var express = require("express");

var router = express.Router();

// path - /products
router.get("/",(req,res)=>{
    res.send("get request for users")
})

// /products/get-product-details
router.get('/user-details/:id',(req,res)=>{
    res.send("get request for  Specific products"+req.params.id);
});

router.get('/serach-by-location/:state/:city',(req,res)=>{
    res.send("get request for  Specific products"+req.params.state + req.params.city);
});

router.get('/search/:key([0-9]{4})',(req,res)=>{
    res.send("data capturing is"+req.params.key)
});


router.get('/search-username/:key([a-zA-Z]{5})',(req,res)=>{
    res.send("data capturing is"+ req.params.key)
});



router.get('*',(req,res)=>{

    var resObj = {
        statuscode: 404,
        statusMsg : "URL not found"
    }
    res.send(resObj)
})

//CRUD - User

router.post('/create-user',(req,res)=>{
    res.send("List of user");
});

router.put('/update-user',(req,res)=>{
    res.send("list of updated users")
});

router.get('/read-all-user',(req,res)=>{
    res.send("Reading users")
});


router.get("/get-user-details",(req,res)=>{
    const userObj = {
        id : 10,
        name: "ram",
        lastname :"gopal",
        status:true 
    }
    res.send(userObj)
})

module.exports = router;
