const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listings.js");
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");

const listingControllers = require("../controllers/listings.js");



router
.route("/")
.get(wrapAsync(listingControllers.index))
.post(
    isLoggedIn,
    validateListing,
    wrapAsync(listingControllers.createListing)
);

//New Route
router.get("/new", isLoggedIn, listingControllers.renderNewForm);

router
.route("/:id")
.get(wrapAsync(listingControllers.showListing))
.put(
    isLoggedIn,
    isOwner,
    validateListing, 
    wrapAsync(listingControllers.updateListing))
.delete(
    isLoggedIn, 
    isOwner,
    wrapAsync(listingControllers.destroyListing));



//Edit Route
router.get("/:id/edit",isLoggedIn, isOwner, wrapAsync(listingControllers.editListing));

module.exports = router;