// will contain all of the user-facing routes, such as the homepage and login page
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const router = require('express').Router();


router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'title',
        'body',
        'date_created'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_body', 'post_id', 'user_id', 'date_created'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        // pass a single post object into the homepage template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts, loggedIn: req.session.loggedIn });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});



// redirecting users to homepage once they log in
router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return; 
    }
    res.render('loginPage');
});

// redirecting users to sign in page once they sign up
router.get('/signup', (req, res) => {
    res.render('signUpPage');
});

//rendering one post to the single-post page
router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'body',
        'title',
        'date_created'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_body', 'post_id', 'user_id', 'date_created'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        // serialize the data
        const post = dbPostData.get({ plain: true });
  
        // pass data to template
        console.log(post);
        res.render('viewPostPage', { post, loggedIn: req.session.loggedIn});


      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// redirecting users to see all their posts with comments
router.get('/postComments', (req, res) => {
    Post.findOne({
        where: {
          id: req.params.id
        },
        attributes: [
          'id',
          'body',
          'title',
          'date_created'
        ],
        include: [
          {
            model: Comment,
            attributes: ['id', 'comment_body', 'post_id', 'user_id', 'date_created'],
            include: {
              model: User,
              attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          }
        ]
      })
        .then(dbPostData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
    
          // serialize the data
          const post = dbPostData.get({ plain: true });
    
          // pass data to template
          res.render('postComments', { post, loggedIn: req.session.loggedIn});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router; 