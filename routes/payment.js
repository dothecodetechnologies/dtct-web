const express = require('express');
const router = express.Router();
const paymentRouter = require('../controller/PaymentController');
router.get('/', paymentRouter.paymentIndex);
module.exports=router