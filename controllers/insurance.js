const cloudinary = require("../middleware/cloudinary");
const User = require("../models/User");
const Insurance = require("../models/ProofInsured");
const Profile = require("../models/Profile");

module.exports = {
    addInsurance: async (res, req) => {
        try{
            const result = await cloudinary.uploader.upload(req.insuranceFile.path);
            console.log(result)
            const insuranceDoc = await Insurance.create({ // perhaps this method is doing too much, I should try adding in a different place
            // await Insurance.create({
                title: req.body.title,
                expires: req.body.expires,
                imgURL: result.secure_url,
                cloudinaryId: result.public_id,
            });
            const profile = await Profile.find({user: req.user.id})
            profile.insurance.push(insuranceDoc)  //don't know if this is right...  needs logging
            console.log(`this is what your profile looks like now ${profile.insurance}`)
            res.redirect(`../editProfile/${profile._id}`)
        }catch(err){
            console.log(err);
        }
    }
    ,//create insurance document from form data
            //push document into users insurance array
            //reload page 
            
    deleteInsurance: async (res, req) => {
        try{

        }catch (err) {
            console.log(err);
        }
    }   //delete slected insurance document
                        //delete insurance from users array - will probably need to slice and splice
                        // reload page
}