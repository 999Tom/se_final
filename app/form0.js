const express = require('express');
const fs = require('fs');
const router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: false}));
const path = require('path');
router.use(express.static('public'));


router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/volunteer.html'))
});

router.post('/upload_vf', function (req, resp){
  
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

module.exports = router;