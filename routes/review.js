const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync");
const Reviews = require("../models/review");
const globalPost = require("../models/global_post");

//REVIEWS
//post route

router.post("/", async (req,res)=>{
    let globalpost = await globalPost.findById(req.params.id);
    let newReview = new Reviews(req.body.review);
    
    globalpost.reviews.push(newReview);

    await newReview.save();
    await globalpost.save();

    console.log("new review saved");
    res.redirect(`/home/${globalpost._id}`);
});

//delete route
router.delete("/:reviewId",
    wrapAsync( async (req,res) => {
    let {id,reviewId} = req.params;
    await globalPost.findByIdAndUpdate(id, {$pull: {reviews: reviewId}})
    await Reviews.findByIdAndDelete(reviewId);
    res.redirect(`/home/${id}`);
}));

module.exports = router;