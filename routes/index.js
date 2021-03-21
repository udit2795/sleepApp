const router = require('express').Router();



const controller = require('../controller/controller');

router.get('/config', controller.getConfig);

router.post('/userData', controller.addData);
router.get('/dashboard', controller.getDashboard);

module.exports = router;
