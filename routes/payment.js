const express = require('express');
const router = express.Router();
const { initPayment, responsePayment } = require("../paytm/services/index");
router.get("/", (req, res) => {
    res.render("payment/index", {payForName : 'SBY Coaching Classes'});
})
router.get("/paywithpaytm", (req, res) => {
    initPayment(req.query.amount).then(
        success => {
            res.render("payment/paytmRedirect.ejs", {
                resultData: success,
                paytmFinalUrl: process.env.PAYTM_FINAL_URL
            });
        },
        error => {
            res.send(error);
        }
    );
});

router.post("/paywithpaytmresponse", (req, res) => {
    responsePayment(req.body).then(
        success => {
            res.render("payment/response.ejs", { resultData: "true", responseData: success });
        },
        error => {
            res.send(error);
        }
    );
});
module.exports = router