let express = require('express');
let router = express.Router();

let burger = require('../models/burger.js')


router.get("/", (req, res)=>{
    burger.all((data)=>{
        let handleBarsObject = {
            burgers: data
        };

        res.render("index", handleBarsObject)
    })
});

router.post("/burgers/create", (req, res)=>{
    burger.create("burger_name", req.body.burger_name, ()=>{
        res.redirect("/");
    });
});

router.put("/burgers/:id", (req, res)=>{
    burger.update(req.params.id, (result)=>{
        console.log(req.params.id)
        res.sendStatus(200)
    })
});

router.delete("/api/burgerrs/:id", (req, res)=>{

});

module.exports = router