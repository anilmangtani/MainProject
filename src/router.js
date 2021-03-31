const express = require('express');
const router = express.Router();
const controller = require("./controllers/controller")

//creating router for the login page
router.get('/login', controller.renderLoginPage);
router.post('/login',controller.renderLoginInfo);

//creating router for the home page
router.get('/home',controller.renderHomePage);

//creating the router for the singup page
router.get('/signup',controller.renderSignUpPage);

router.post('/signup',controller.renderSignUpInfo);

//creating the router for the fruits section page
router.get('/plants',controller.renderPlantsPage);

//creating the router for the vegetable section
router.get('/vegetable',controller.renderVegPage);

//creating the router for the fruits section
router.get('/fruits',controller.renderFruitPage);

//creating the router for the planter
router.get('/planter',controller.renderPlanterPage);

//creatinf the router for the gift
router.get('/gift',controller.renderGiftPage);

//creating the router for the care-decor
router.get('/care', controller.renderCarePage)

//creating the router for the information
router.get('/information',controller.renderInfoPage);

//creating the router for the how to take care of plants page
router.get('/how-to-take-care-of-plants',controller.renderHowToTakeCare);

//creating the router for the beginner guide
router.get('/beginner-guide',controller.renderBeginnerGuide);

//creating the router for the how-to-grow-plants-from-seeds
router.get('/how-to-grow-plants-from-seeds',controller.renderPlantsFromSeeds);

//creating the router for the buy item pug
router.get('/buyitem',controller.renderBuyItem);

//creatng the router for the chatting
router.get('/chatting', controller.renderChatting);



module.exports = router;
