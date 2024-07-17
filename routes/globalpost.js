const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");

//Index (home) Route
router.get("/",async (req,res) => {
    const globalposts = await globalPost.find({});
    res.render("globalposts/index.ejs",{globalposts}) ;
});


//new route
router.get("/new",(req,res) => {
    res.render("globalposts/new.ejs");
});

//Create Route
router.post("/", wrapAsync(async(req,res) =>{
    const newglobalpost = new globalPost(req.body.post);
    await newglobalpost.save();
    res.redirect("/home");
}));

// edit route
router.get("/:id/edit",async (req,res) => {
    let {id} = req.params;
    const globalpost = await globalPost.findById(id);
    
    res.render("globalposts/edit.ejs",{globalpost});
});

// Update Route
router.put("/:id",async (req,res) => {
    let {id} = req.params;
    await globalPost.findByIdAndUpdate(id, {...req.body.post});
    console.log({...req.body.post});
    res.redirect(`/home/${id}`);
})

//show post route
router.get("/:id", wrapAsync(async (req,res) =>{
    let {id} = req.params;
    const post = await globalPost.findById(id).populate("reviews");
    res.render("globalposts/show.ejs",{post});
}));

// delete globalpost
router.delete("/:id", async (req,res)=> {
    let {id} = req.params;
    const deletedpost = await globalPost.findByIdAndDelete(id);
    console.log(deletedpost);
    res.redirect("/home");
});

module.exports = router;

