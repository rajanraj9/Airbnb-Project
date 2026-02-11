const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listings.js");
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");

const listingControllers = require("../controllers/listings.js");

//Index Route
router.get("/", wrapAsync(listingControllers.index));

//New Route
router.get("/new", isLoggedIn, listingControllers.renderNewForm);

//show Route
router.get("/:id", wrapAsync(listingControllers.showListing));

//Create Route
router.post("/", isLoggedIn,validateListing, wrapAsync(listingControllers.createListing));

//Edit Route
router.get("/:id/edit",isLoggedIn, isOwner, wrapAsync(listingControllers.editListing));

//Update Route
router.put("/:id",isLoggedIn, isOwner, validateListing, wrapAsync(listingControllers.updateListing));

//Delete Route
router.delete("/:id",isLoggedIn, isOwner,wrapAsync(listingControllers.destroyListing));

module.exports = router;