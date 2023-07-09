let locationList = require('../data/location');
const courses = require('../data/computer_courses');
const studentModel = require('../models/studentRegSchema');
const softwareCourses = require('../data/software-courses');
const { sbyccCourses,sbyccClasses } = require('../data/sbycc_courses');
let visitSiteCount = 10;

let indexPage = (req, res, next) => {
    res.render('index', { visitSiteCount: visitSiteCount, locationList: locationList })
    next();
}
let aboutPage = (req, res, next) => {
    res.render('pages/about/index', { visitSiteCount: visitSiteCount, locationList: locationList })
    next();
}
let filterData = (cid) => {
    return courses.find(data => data.id.toLowerCase() == cid)
}

let coursePage = (req, res, next) => {
    res.render('courses/c_template.ejs', { visitSiteCount: visitSiteCount })
    console.log(req.params.id);
    console.log(filterData(req.params.id));
    next();
}
let currentYear = new Date().getFullYear();
let registrationStart = (req, res, next) => {
    res.render('pages/registration/index', { locationList: locationList, visitSiteCount: visitSiteCount, courses: courses, softwareCourses: softwareCourses, year: currentYear })
    next();
}
let studentSBYCCRegistration = (req, res, next) => {
    res.render('pages/registration/sbycc', { locationList: locationList, visitSiteCount: visitSiteCount, courses: sbyccCourses, classes: sbyccClasses, year: currentYear })
    next();
};
let studentDTCTRegistration = (req, res, next) => {
    res.render('pages/registration/dtct', { locationList: locationList, visitSiteCount: visitSiteCount, courses: courses, softwareCourses: softwareCourses, year: currentYear })
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


module.exports = { indexPage, aboutPage, contactPage, registrationStart, studentSBYCCRegistration, studentDTCTRegistration, studentRegistrationPost, careerPage, coursePage };