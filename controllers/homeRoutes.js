const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// Render the home page
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({include:[User]})
       const posts = postData.map(post => post.get({plain:true}))
       res.render('homepage', {posts})
    // res.json(posts)
    } catch (error) {
        res.json(error)
    }
})

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findOne( {where:{id:req.params.id},include:[User, {model:Comment, include: [User]}]})
       const posts = postData.map(post => post.get({plain:true}))
    //    res.render('homepage', {posts})
    res.json(posts)
    } catch (error) {
        res.status(404)
    }
})

// router.get('/', async (req, res) => {})


module.exports = router;