const router = require('express').Router();
const apiRouters = require('./api');
router.use('/api', apiRouters);
const homeRouters = require('./homeRoutes')
router.use('/', homeRouters)

module.exports = router