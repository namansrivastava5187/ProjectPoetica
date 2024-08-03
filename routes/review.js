const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync");
const Reviews = require("../models/review");
const globalPost = require("../models/global_post");
const {isLoggedIn} = require("../middleware");

//REVIEWS
//post route

router.post("/", isLoggedIn, async (req,res)=>{
    let globalpost = await globalPost.findById(req.params.id);
    let newReview = new Reviews(req.body.review);
    
    newReview.author = req.user._id;
    globalpost.reviews.push(newReview);
    
    await newReview.save();
    await globalpost.save();

    console.log("new review saved");
    req.flash("success", "new commment added");
    res.redirect(`/home/${globalpost._id}`);
});

//delete route
router.delete("/:reviewId", isLoggedIn,
    wrapAsync( async (req,res) => {
    let {id,reviewId} = req.params;
    await globalPost.findByIdAndUpdate(id, {$pull: {reviews: reviewId}})
    await Reviews.findByIdAndDelete(reviewId);
    req.flash("success", "comment deletd");
    res.redirect(`/home/${id}`);
}));

module.exports = router;