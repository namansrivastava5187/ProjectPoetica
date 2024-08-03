const mongoose = require("mongoose");
const initData = require ("./data");
const globalPost = require("../models/global_post");


main()
.then(()=>{
    console.log("connected to db");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/poetica')};


const initDB = async () => {
    await globalPost.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, author: "66974447b61e1baebc881609"}));
    await globalPost.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();
