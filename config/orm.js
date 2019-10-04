let connection = require('./connection');


let orm = {
    selectAll: (table, cb)=>{
        connection.query(`select * from ${table};`, (err,result)=>{
            if (err) throw err;
            cb(result)
        });
    },
    insertOne: (table, col, val, cb)=>{
        console.log(`insert into ${table} (${col}) values ("${val}")`)
        connection.query(`insert into ${table} (${col}) values ("${val}")`, (err, result)=>{
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: ()=>{

    }
};


module.exports = orm;