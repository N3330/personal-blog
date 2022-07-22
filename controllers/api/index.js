const router = require('express').Router();
const userRouters = require('./userRoutes');
const postRouters = require('./postRoutes');
router.use('/posts', postRouters);
router.use('/users', userRouters);
module.exports = router