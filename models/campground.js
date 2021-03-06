var mongoose = require("mongoose");

// SCHEMA setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: String,
    location: String,
    lat: Number,
    lng: Number,
    createdAt: { type: Date, default: Date.now },
    // associate Campground with User
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

// tell the mongoose Campground database to use this schema
// The first argument is the singular name of the collection that will be created for your mode
module.exports = mongoose.model("Campground", campgroundSchema);