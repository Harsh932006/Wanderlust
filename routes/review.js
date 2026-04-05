const express = require("express");
const router = express.Router({mergeParams: true});
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const {validateReview, isReviewAuthor} = require("../middleware.js");
const isLoggedIn = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


//Review
//Post Review Route
router.post("/",isLoggedIn , validateReview, wrapAsync(reviewController.createReview));

//Delete Review Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor ,wrapAsync(reviewController.destroyReview)); 


module.exports = router;