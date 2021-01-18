const express = require("express");
const homeController = require("../controllers/homeController");
const aboutController = require("../controllers/aboutController");
const contactController = require("../controllers/contactController");
const fourofourController = require("../controllers/fourofourController");
const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController");


const router = express.Router();
router.get('/', homeController);
router.get('/about', aboutController);
router.get('/contact', contactController);
router.get('/login', loginController);
router.get('/signup', signupController);
router.post('/login', loginController);
router.post('/signup', signupController);
router.use(fourofourController);

module.exports = router;
