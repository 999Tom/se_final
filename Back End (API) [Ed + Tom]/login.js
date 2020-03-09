const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

/*var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : process.env.DATABASE_PASSWORD,
	database : 'login'
});*/

users = ['test', 'test'];

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', (req, res) => {
	var username = req.body.username;
	var password = req.body.password;
	if (username && password) {
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
		if (username == users[0] && password == users[1]){
			res.status(200).redirect('/admin');
		}else{
			res.status(403).send('Incorrect username or Password!');
		}
		res.end();
	} else {
		res.status(403).send('Please enter Username and Password!');
		res.end();
	}
});

app.get('/admin', (req, res) => {
	if (req.session.loggedin) {
		res.send('Welcome back, ' + req.session.username + '!');
	} else {
		res.send('Please login to view this page!');
	}
	res.end();
});

app.post('/logout', (req, res) => {
	if (req.session.loggedin){
		req.session.loggedin = false;
		req.session.username = '';
	}
	res.status(200).redirect('/');
})

app.listen(3000);