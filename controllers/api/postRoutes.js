const router = require('express').Router();
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth')


router.post('/', withAuth, (req, res) => {
    Post.create({...req.body, userId:req.session.userId})
    .then(postData => res.json(postData))
    .catch(err => res.json(err))
})

module.exports = router 