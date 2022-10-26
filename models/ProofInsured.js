const mongoose = require("mongoose");

const insuranceSchema = new mongoose.Schema({ 
    title: {type: String,
        require: true},
    expires: {type: Date,
        require: true},
    imgURL: {type: String,
        require: true}, 
    cloudinaryId: {type: String,
        require: true}
});

module.exports = mongoose.model("ProofInsured", insuranceSchema);