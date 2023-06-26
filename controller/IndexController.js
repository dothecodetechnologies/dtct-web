const { reset } = require('nodemon');
let locationList = require('../data/location');
const courses = require('../data/courses');
const studentModel = require('../models/studentRegSchema');
const softwareCourses = require('../data/software-courses');
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
    res.render('pages/registration/index', { locationList: locationList, visitSiteCount: visitSiteCount, courses: courses, softwareCourses: softwareCourses })
    next();
};
let studentRegistrationPost = (req, res, next) => {
    let { name, email, mobile, c_course, s_course, location, location2, slot, adhar } = req.body;
    let final_location;
    if (location != 'others') {
        final_location = location
    }
    else {
        final_location = location2;
    }

    let student = new studentModel();
    student.name = name;
    student.email = email;
    student.mobile = mobile;
    student.c_course = c_course;
    student.s_course = s_course;
    student.final_location = final_location;
    student.slot = slot;
    student.adhar = adhar;
    if (adhar) {
        student.save().then(() => {
            res.redirect('/registration');
        }).catch((err) => {
            console.log('err');
        })
    }
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