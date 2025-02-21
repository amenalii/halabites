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

// NEW ROUTE
router.get("/new", async (req, res) => {
  res.render("restaurants/new.ejs");
});

// DELETE ROUTE
router.delete("/:restaurantId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.restaurants.id(req.params.restaurantId).deleteOne();
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/restaurants`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

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
router.get("/:restaurantId/edit", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const restaurant = currentUser.restaurants.id(req.params.restaurantId);
    res.render("restaurants/edit.ejs", {
      restaurant: restaurant,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

// SHOW ROUTE
router.get("/:restaurantId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const restaurant = currentUser.restaurants.id(req.params.restaurantId);
    res.render("restaurants/show.ejs", {
      restaurant: restaurant,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});
                                   

module.exports = router;