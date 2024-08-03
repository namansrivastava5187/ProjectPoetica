const express = require("express");
const router = express.Router();
const User = require ("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl} = require("../middleware.js");
const { redirect } = require("next/dist/server/api-utils/index.js");




router.get("/signup", (req,res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", async (req,res) => {
    try{let { username,name,email,password} = req.body;
    const newUser = new User ({name,email, username});
    const registeredUser = await User.register(newUser , password);
    req.login(registeredUser, (err) => {
        if (err) {
            return next (err);
        };
        req.flash("success", "User Registered");
    res.redirect("/home");
    });
    
    
} catch(e){
    res.send(e);
    }
});

router.get("/login",(req,res) => {
    res.render("users/login.ejs");
});

router.post("/login", saveRedirectUrl, passport.authenticate("local", { failureRedirect : "/login", failureFlash:true }), async (req,res) => {
    req.flash("success","welcome logged in");
    const redirect = res.locals.redirectUrl || "/home";
    res.redirect(redirect);
});


router.get("/logout" , (req,res, next) => {
    req.logout((err) => {
    if (err) {
        next(err);
    }
    req.flash("success", "you are logged out");
    res.redirect("/home");
});
});

module.exports =router;
