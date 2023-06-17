const paymentIndex = ((req, res) => {
    res.render("payment/index" ,{payForName  : 'SBY Coaching Classes'})
})
module.exports = { paymentIndex }