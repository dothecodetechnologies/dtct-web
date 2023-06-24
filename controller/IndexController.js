let locationList = require('../data/location')
let visitSiteCount = 10;
let indexPage = (req, res, next) => {
    res.render('index', { visitSiteCount: visitSiteCount })
    next();
}
let aboutPage = (req, res, next) => {
    res.render('pages/about/index', { visitSiteCount: visitSiteCount })
    next();
}
let studentRegistrationFormShow = (req, res, next) => {
    res.render('pages/registration/index', { locationList: locationList, visitSiteCount: visitSiteCount })
    next();
};
let studentRegistrationPost = (req, res, next) => {
    console.log(req.body);
    next();
}
let contactPage = (req, res, next) => {
    res.render('pages/contact/index', { visitSiteCount: visitSiteCount })
    next();
}
let careerPage = (req, res, next) => {
    res.render('pages/career/index', { visitSiteCount: visitSiteCount });
    next();
}


module.exports = { indexPage, aboutPage, contactPage, studentRegistrationFormShow, studentRegistrationPost, careerPage, visitSiteCount };