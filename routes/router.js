const express = require('express');
const router = express.Router();
const { renderLoginPage,
        renderLoginInfo,
        renderHomePage,
        renderSignUpPage,
        renderSignUpInfo,
        renderPlantsPage,
        renderVegPage,
        renderFruitPage,
        renderPlanterPage,
        renderGiftPage,
        renderCarePage,
        renderInfoPage,
        renderHowToTakeCare,
        renderBeginnerGuide,
        renderPlantsFromSeeds,
        renderBuyItem,
        renderPlasticHndTrwl,
        renderPlasticHndFork,
        renderPlasticHndCultivator,
        renderHedgeShear,
        renderWaterCan,
        renderBonsaiSet,
        renderThreeProngHS,
        renderFertSterameal,
        renderFertCocopeat,
        renderFertExfoiled,
        renderFertJeevamrut,
        renderChatting } = require("../src/controllers/controller")

//creating router for the login page
router.get('/login', renderLoginPage);
router.post('/login', renderLoginInfo);

//creating router for the home page
router.get('/', renderHomePage);
router.get('/home', renderHomePage);

//creating the router for the singup page
router.get('/signup', renderSignUpPage);

router.post('/signup', renderSignUpInfo);

//creating the router for the fruits section page
router.get('/plants', renderPlantsPage);

//creating the router for the vegetable section
router.get('/vegetable', renderVegPage);

//creating the router for the fruits section
router.get('/fruits', renderFruitPage);

//creating the router for the planter
router.get('/planter', renderPlanterPage);

//creatinf the router for the gift
router.get('/gift', renderGiftPage);

//creating the router for the care-decor
router.get('/care', renderCarePage)

//creating the router for the information
router.get('/information', renderInfoPage);

//creating the router for the how to take care of plants page
router.get('/how-to-take-care-of-plants', renderHowToTakeCare);

//creating the router for the beginner guide
router.get('/beginner-guide', renderBeginnerGuide);

//creating the router for the how-to-grow-plants-from-seeds
router.get('/how-to-grow-plants-from-seeds', renderPlantsFromSeeds);

//creating the router for the buy item pug
router.get('/TransplantingTrowel', renderBuyItem);
router.get('/PlasticHandTrowel', renderPlasticHndTrwl);
router.get('/PlasticHandFork', renderPlasticHndFork);
router.get('/PlasticHandCultivator', renderPlasticHndCultivator);
router.get('/hedgeShear', renderHedgeShear);
router.get('/watercan', renderWaterCan);
router.get('/bonsaiset', renderBonsaiSet);
router.get('/ThreeProngHS', renderThreeProngHS);
router.get('/SteramelFert', renderFertSterameal);
router.get('/cocopeatFert', renderFertCocopeat);
router.get('/ExfoliatedFret', renderFertExfoiled);
router.get('/JeevamrtuFret', renderFertJeevamrut);
//creatng the router for the chatting
router.get('/chatting', renderChatting);



module.exports = router;
