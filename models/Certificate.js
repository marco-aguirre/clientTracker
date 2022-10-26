const mongoose = require("mongoose");

const certSchema = new mongoose.Schema({ 
    imgURL: String, 
    cloudinaryId: String
});

module.exports = mongoose.model("Certificate", certSchema);