var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "caravan8",
    database: "SE_project"
})

con.connect(function(err){
    if(err)throw err;
    con.query("SELECT * from SE_project.Images", function(err,result,fields){
        if(err)throw err;
        console.log(result);
    })
})
