const express = require('express')
const router = express.Router();
const IndexController = require('../controller/IndexController');
const PaymentController = require('../controller/PaymentController');
router.get('/', IndexController.indexPage);
router.get('/about', IndexController.aboutPage);
router.get('/payment', PaymentController.paymentIndex);
router.get('/contact', IndexController.contactPage);
router.get('/registration', IndexController.studentRegistrationFormShow);
router.post('/registration', IndexController.studentRegistrationPost)
router.get('/career', IndexController.careerPage);
module.exports = router;