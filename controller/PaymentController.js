const paymentIndex = ((req, res,next) => {
    res.render('pages/upcomming/index')
    next();
})
module.exports = { paymentIndex }