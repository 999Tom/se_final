const express = require('express');
const fs = require('fs');
const router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: false}));
const path = require('path');
router.use(express.static('public'));
var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "caravan8",
    database: "SE_project"
})

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/volunteer.html'))
});

router.post('/upload_vf', function (req, resp){
  	con.connect();
    let post = req.body.text;
    //post = post.split(",");
    let date = new Date();
    let date2 = String(date) + "volunteer Form"
    console.log(post);
    fs.writeFile("form/"+date2, post, (err) =>{
      if (err) throw err;
    })
    resp.send({"message":"it works"});
    var form_file = {
					Form: fs.readFileSync("form/data2"),

				};
	con.query('INSERT INTO Volunteer_Form ?', form_file, function(err,result){console.log(result)});

});
con.end();



module.exports = router;