const express = require("express");
const router = express.Router();
const User = require ("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");




router.get("/signup", (req,res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", async (req,res) => {
    try{let { username,name,email,password} = req.body;
    const newUser = new User ({name,email, username});
    const registeredUser = await User.register(newUser , password);
    console.log(registeredUser);
    res.redirect("/home");
} catch(e){
    //req.flash("error",e.message);
    res.send(e);
    res.redirect("/signup");
}
});

module.exports =router;
