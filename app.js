const express = require("express");
const app = express();
const mongoose = require("mongoose");
const globalPost = require("./models/global_post");
const Reviews = require("./models/review");
const path = require ("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const homeRouter = require("./routes/globalpost");
const reviewRouter = require ("./routes/review");
const userRouter = require ("./routes/user");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

main()
.then(()=>{
    console.log("connected to db");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/poetica')};

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res) => {
    res.send("hi this is home");
});


const sessionOption = {
    secret : "mysupersecretcode",
    resave : false,
    saveUninitialized : true,
    cookie :{
        expires: Date.now() + 1000*60*60*24*7,
        maxAge: 1000*60*60*24*7,
        httpOnly : true
    }
};
app.use(session(sessionOption));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});



app.use("/home",homeRouter);
app.use("/home/:id/reviews",reviewRouter);
app.use("/", userRouter);
app.use(express.json());







app.use((err,req,res,next) =>{
    console.log(err);
    res.send("something went wrong");
    next();
});

app.listen(8080, () =>{
    console.log("App is listening at port 8080");
});