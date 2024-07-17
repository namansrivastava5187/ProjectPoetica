const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Reviews = require("./review");

const listingSchema = new Schema ({
    title : String,
    description : String,
    outputimage : String,
    likes: Number,
    author : String,
    reviews :[
        {
            type: Schema.Types.ObjectId,
            ref:"Review",
        },
    ]
});

listingSchema.post("findOneAndDelete", async (post) => {
    if (post) {
        await Reviews.deleteMany({_id: { $in: post.reviews}})
    }
} );


globalPost = mongoose.model('Globalpost',listingSchema)

module.exports = globalPost ;