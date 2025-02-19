const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

//INDEX ROUTE
router.get("/", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    res.render("restaurants/index.ejs", {
      restaurants: currentUser.restaurants,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;

// NEW ROUTE
router.get('/new', async (req, res) => {
  res.render('restaurants/new.ejs');
});

// DELETE ROUTE

// UPDATE ROUTE

// CREATE ROUTE
router.post('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.restaurants.push(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/restaurants`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// EDIT ROUTE

// SHOW ROUTE
