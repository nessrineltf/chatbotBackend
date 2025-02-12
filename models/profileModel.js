const mongoose = require('mongoose');

/* profile schema  */
const ProfileSchema = new mongoose.Schema({
    users:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    biography:{
        type: String,
    },
    phone:{
        type: String,
    },
    picture:{
        type: String,
    },
    country:{
        type: String,
    },
    CVlink: {
        type:String,
    },
    gitHub:{
        type:String,
    },
   

});
module.exports = mongoose.model('Profile', ProfileSchema);