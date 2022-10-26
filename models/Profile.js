const mongoose = require("mongoose");
const cert = require("../models/Certificate")
const insurance = require("../models/ProofInsured")

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,  
        ref: "User",
    },
    myName: {
        first: String,
        middle: String,
        last: String
    },
    modalities: Array,
    yearsExperience: Number,
    rating: Number,
    bio: {
        type: String,
        require: true
    },
    profilePic: {
        profPicURL: String, 
        cloudinaryId: String
    },
    certs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Certificate'}],
    insurance: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProofInsured'}],
    alerts:Array,
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("Profile", ProfileSchema);