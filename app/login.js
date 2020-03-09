const express = require('express');
const router = express.Router();
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcryptjs');

users = ['test', ''];
bcrypt.hash('test', 10, function(err, hash){
	if (err){
		console.log(err);
		return;
	}
	users[1] = hash;
});


router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
router.use(express.static('public'));
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/login.html'));
});

router.post('/auth', (req, res) => {
	var username = req.body.username;
	var password = req.body.password;
	if (username && password) {
		let result = bcrypt.compareSync(password, users[1]);
		if (result){
			req.session.loggedin = true;
			req.session.username = username;
			res.redirect('/login/admin');
			res.end();
		}else{
			res.redirect('/login/incorrect');
			//res.sendFile(path.join(__dirname + '/public/error.html'));
			res.end();
		}
		/*connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('/admin');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});*/
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});

router.get('/admin', (req, res) => {
	if (req.session.loggedin) {
		//res.sendFile(path.join(__dirname + '/public/admin.html'));
		res.status(200).send('Welcome back, ' + req.session.username + '!');
	} else {
		res.status(403).send('Please login to view this page!');
	}
	res.end();
});

router.get('/incorrect', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/incorrectlogin.html'));
})

router.post('/logout', (req, res) => {
	if (req.session.loggedin){
		req.session.loggedin = false;
		req.session.username = '';
	}
	res.status(200).redirect('/');
});

module.exports = router;