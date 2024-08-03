const express = require("express");
const router = express.Router();
const passport = require('passport');
const session = require('express-session');
const wrapAsync = require("../utils/wrapAsync");
const {isLoggedIn} = require("../middleware");
const { populate } = require("../models/user");

//Index (home) Route
router.get("/",async (req,res) => {
    const globalposts = await globalPost.find({});
    res.render("globalposts/index.ejs",{globalposts}) ;
});


//new route
router.get("/new",isLoggedIn , (req,res) => {
    res.render("globalposts/new.ejs");
    
});

//Create Route
router.post("/", wrapAsync(async(req,res) =>{
    const newglobalpost = new globalPost(req.body.post);
    newglobalpost.author = req.user._id;
    await newglobalpost.save();
    req.flash("success", "new post created");
    res.redirect("/home");
}));

// edit route
router.get("/:id/edit",isLoggedIn ,async (req,res) => {
    let {id} = req.params;
    const globalpost = await globalPost.findById(id);
    
    res.render("globalposts/edit.ejs",{globalpost});
    
});

// Update Route
router.put("/:id",isLoggedIn ,async (req,res) => {
    let {id} = req.params;
    await globalPost.findByIdAndUpdate(id, {...req.body.post});
    console.log({...req.body.post});
    req.flash("success", "post updated");
    res.redirect(`/home/${id}`);
})

//show post route
router.get("/:id", wrapAsync(async (req,res) =>{
    let {id} = req.params;
    const post = await globalPost.findById(id)
    .populate({
        path: "reviews",
    populate: {
        path: "author",
    },
})
    .populate("author");
    if(!post) {
        req.flash("error", "Post does not exist!");
        res.redirect("/home");
    };
    console.log(post);
    res.render("globalposts/show.ejs",{post});
}));

// delete globalpost
router.delete("/:id",isLoggedIn , async (req,res)=> {
    let {id} = req.params;
    const deletedpost = await globalPost.findByIdAndDelete(id);
    console.log(deletedpost);
    req.flash("success", "post deleted");
    res.redirect("/home");
});

module.exports = router;

