const express = require('express');
const app = express();
 
app.use(express.static('client'));

var images;
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
        images = result;
    })
})

app.get('/list', function (req, resp){
    resp.send(images);
});
app.listen(8090)
