// get profile that belongs to this user
    //if no profile exists, reroute to create profile
const User = require("../models/User");
const Profile = require("../models/Profile")

module.exports = {
    getProfile: async (req, res) => {
        try{
            const profile = await Profile.find( {user: req.user.id});
            if (!profile.length){                                                  
                console.log('no profile - go make one')
                res.redirect("/profiles/editProfile")                                
            }else if (profile.length){
                console.log(profile);                                           //logs an empty array
                res.render("profile.ejs", {profile: {...profile}});      //end of last night, next steps need doing: edit profile.ejs to render an actual profile.
 }
        } catch (err){
            console.log('this is the error' + err);
        }
    },
    fillOutProfile: async (req, res) => {
        try{
            res.render("createProfile.ejs")
        }catch(err){
            console.log(err)
        }
    },
    createProfile: async (req, res) => {
        try { 
            // const result = await cloudinary.uploader.upload(req.file.path);
            //create a profile from form data
            //upload profile pic
            const profile = await Profile.create({
                // name: req.body.name,
                // modalities: req.body.modalites,
                // yearsExperience: req.body.yearsExperience,
                //rating: TBD,
                // bio: req.body.bio,
                // profilePic: result.secure_url,
                // cloudinaryId: result.public_id,
                user: req.user.id,
            });
            console.log("profile added");
            res.redirect(`/editProfile/${profile._id}`);            
        }catch (err) {
            console.log(err);
        }
    },
    editProfile: async (req, res) => {
        try{
            const profile = await Profile.find({user: req.user.id}).lean();
            console.log("logging from editProfile:" + profile);
            res.render("editProfile.ejs", {profile: {...profile}});
            console.log(profile);
        }catch(err){
            console.log(err);
        }
    },
    updateProfile: async (req, res) => {
        try{console.log(req.body)
            req.body.user = req.user.id
            const profile = await Profile.findOneAndUpdate({user: req.body.user},{$set:{ user: req.body.user , 
                                                                                        myName: {first: req.body.firstname,
                                                                                                  middle: req.body.middlename,
                                                                                                last: req.body.lastname},
                                                                                        modalitiies: modalities,
                                                                                        yearsExperience:req.body.yearsExperience,
                                                                                        bio:req.body.bio,   }},{upsert: true, new: true})   //TODO: certs and profile pics
            res.redirect('../') //one dot reloads the same path you are on, two dots takes you up a level
        }catch(err){
            console.log(err);
        }
    }
};