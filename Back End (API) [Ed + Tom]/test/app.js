const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.static('client'));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

app.post('/upload_vf', function (req, resp){
  
    let post = req.body.text;
    //post = post.split(",");
    let date = new Date();
    let date2 = String(date) + "volunteer Form"
    console.log(post);
    fs.writeFile("form/"+date2, post, (err) =>{
      if (err) throw err;
    })
    resp.send({"message":"it works"});

  
});

module.exports = app;