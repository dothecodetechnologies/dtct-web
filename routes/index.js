const express = require('express')
const router = express.Router();
let locationList = require('../data/location')
router.get('/', function (req, res, next) {
   res.render('index')
    next();
});
router.get('/about', function (req, res, next) {
    res.render('pages/about/index')
     next();
 });
 router.get('/payment', function (req, res, next) {
    res.render('pages/upcomming/index')
     next();
 });
router.get('/contact', function (req, res, next) {
    res.render('pages/contact/index')
     next();
 });

 router.get('/registration', function (req, res, next) {
    res.render('pages/registration/index', {locationList : locationList})
     next();
 });
 router.post('/registration', function(req, res, next)
 {
    console.log(req.body);
    res.render('pages/registration/index')
    next();
 })

 router.get('/career', function (req, res, next) {
    res.render('pages/career/index')
     next();
 });
module.exports = router;