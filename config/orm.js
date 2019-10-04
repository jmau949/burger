let connection = require('./connection');


let orm = {
    selectAll: (table, cb)=>{
        connection.query(`select * from ${table};`, (err,result)=>{
            if (err) throw err;
            cb(result)
        });
    },
    insertOne: (table, col, val, cb)=>{

        connection.query(`insert into ${table} (${col}) values ("${val}")`, (err, result)=>{
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (table, condition, cb)=>{
        console.log(`update ${table} set devoured = 0 where id = ${condition}`)
        connection.query(`update ${table} set devoured = 1 where id = ${condition}`, (err, result)=>{
            if (err) throw err;
            cb(result)
        })

    }
};


module.exports = orm;