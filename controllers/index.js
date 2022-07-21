const router = require('express').Router();
const apiRouters = require('./api');
router.use('/api', apiRouters);
module.exports = router