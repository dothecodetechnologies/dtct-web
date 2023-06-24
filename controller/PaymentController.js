const paymentIndex = ((req, res,next) => {
    res.render('pages/upcomming/index', {'visitSiteCount' : '10'})
    next();
})
module.exports = { paymentIndex }