const express = require('express');
const router = express.Router();
const fs = require('fs');

// all routes in this file start with /admin

router.get('/', (req, res) => {
// returns any data needed for admin page
	res.json({photos: []}).status(200);
});

router.get('/photos', (req, res) => {
	let pages = {homepage: [], aboutpage: [], adminpage: [], shoppage: [], paymentpage: []};
// return list of photos in format:
//{homepage: [homepage photos], aboutpage: [aboutpage photos], ...}
});

router.get('/shop', (req, res) => {
// returns list of items in shop from database
});

router.get('/volunteer', (req, res) => {
// returns volunteer forms as pdf files
});

router.get('/shop/stock/:item', (req, res) => {
	let item = req.params.item;
	//Query database
	//return result
// returns stock for specific item in shop
});

router.post('/photo/:id', (req, res) => {
	let new_photo = req.params.id;
// needs webpage parameter sent with request
// add a new photo to file system for specified webpage
//returns success or failure json message
});

router.delete('/photo/:id', (req, res) => {
	let selected_photo = req.params.id;
// deletes photo from file system for webpage
// returns success or failure json message
});

router.post('/shop/:item', (req, res) => {
	let item = req.params.item;
	//requires item parameter
	// adds item to database
	// returns success or failure message
});

router.delete('/shop/:item', (req, res) => {
	let item = req.params.item;
	//requires item parameter
	// remove item from database
	// returns success or failure message
});

router.post('/shop/stock/:item&:new_stock', (req, res) => {
	let item = req.params.item;
	let stock = req.params.new_stock;
	// requires item and new_stock parameter
	// changes value of stock for item in database
	// returns success or failure message
});

module.exports = router;