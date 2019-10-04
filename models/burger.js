let orm = require('../config/orm.js');

let burger = {
    all: (cb)=>{
        orm.selectAll("burgers", (res)=>{
            cb(res);
        });
    },
    create: (col, val, cb)=>{
        orm.insertOne("burgers", col, val, (res)=>{
            console.log(res)
            cb(res);
        })
    }, 
    update: ()=>{

    },
    delete: ()=>{

    }
};

module.exports = burger