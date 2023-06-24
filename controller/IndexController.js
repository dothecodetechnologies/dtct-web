let locationList = require('../data/location')

let indexPage = (req, res, next) => {
    res.render('index')
    next();
}
let aboutPage = (req, res, next) => {
    res.render('pages/about/index')
    next();
}
let studentRegistrationFormShow = (req, res, next) => {
    res.render('pages/registration/index', { locationList: locationList })
    next();
};
let studentRegistrationPost = (req, res, next) => {
    console.log(req.body);
    next();
}
let contactPage = (req, res, next) => {
    res.render('pages/contact/index')
    next();
}
let careerPage = (req, res, next) => {
    res.render('pages/career/index');
    next();
}

module.exports = { indexPage, aboutPage, contactPage, studentRegistrationFormShow, studentRegistrationPost, careerPage };