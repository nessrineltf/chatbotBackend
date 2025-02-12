const profileModel = require("../models/profileModel");
const multerPicture= require("../config/multer-picture");
const UploadPicture=multerPicture.single("picture");

// add Picture

exports.AddPicture = async (req,res) => {
  try {
    await UploadPicture(req,res,async function (error) {
      if(error){
        return res.status(500).json({message: error.message})
      }
      // console.log(req);
      const data = await profileModel.findOneAndUpdate({
        user: req.user._id,
      } ,
      {
        $set:{
            picture: req.file.filename,
        }
        },
      {
        new : true
      }
    );
   return  res.status(201).json({message: "picture added with success" , data});

    });

  } catch (error) {
    res.status(500).json(error);
  }  
}
exports.UpdateProfile =async (req,res) => {
    
}


exports.deletProfile= async(req,res)=>{
    
}
exports.getAllProfile= async (req,res)=>{
    const profile = await profileModel.find();
    res.status(200).json(profile);
}
exports.getOneProfile= async (req,res)=>{
    //const profile = await profileModel.findById();
    //res.status(200).json(profile);
}