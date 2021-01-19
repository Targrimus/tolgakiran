const express = require("express");
const homeController = require("../controllers/homeController");
const aboutController = require("../controllers/aboutController");
const contactController = require("../controllers/contactController");
const fourofourController = require("../controllers/fourofourController");
const authController = require("../controllers/authController");


const router = express.Router();
router.get('/', homeController);
router.get('/about', aboutController);
router.get('/contact', contactController);
router.get('/login', authController.loginGetController);
router.get('/signup', authController.signupGetController);
router.post('/login', authController.loginPostController);
router.post('/signup', authController.signupPostController);
router.use(fourofourController);

module.exports = router;
