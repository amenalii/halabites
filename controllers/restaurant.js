const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

//INDEX ROUTE
router.get('/', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      res.render('restaurants/index.ejs', {
        restaurants: currentUser.restaurants,
      });
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  });

module.exports = router;