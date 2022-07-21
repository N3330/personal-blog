const router = require('express').Router();
const userRouters = require('./userRoutes');
router.use('/users', userRouters);
module.exports = router