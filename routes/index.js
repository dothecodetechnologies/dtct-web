const express = require('express')
const expressSession = require('express-session');
const expressVisitorCounter = require('express-visitor-counter');
const redis = require('redis');
const counters = {};
const redisClient = redis.createClient({ database: 1 });
const IndexController = require('../controller/IndexController');
const router = express.Router();

// (async () => {
// await redisClient.connect();
// const router = express.Router();
// router.enable('trust proxy');
// router.use(expressSession({ secret: 'secret', resave: false, saveUninitialized: true }));
// router.use(expressVisitorCounter({ hook: counterId => counters[counterId] = (counters[counterId] || 0) + 1, redisClient }));
// router.get('/', (req,res,next)=>
// {
//     res.json(counters)
// })
// })
router.get('/', IndexController.indexPage);
router.get('/about', IndexController.aboutPage);
router.get('/course/:id', IndexController.coursePage);
router.get('/contact', IndexController.contactPage);
router.get('/registration', IndexController.registrationStart);
router.get('/sbycc/registration', IndexController.studentSBYCCRegistration);
router.get('/dtct/registration', IndexController.studentDTCTRegistration);
router.post('/registration', IndexController.studentRegistrationPost)
router.get('/career', IndexController.careerPage);
module.exports = router;