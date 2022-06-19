const mongoose = require("mongoose")

const blogsSchema = new mongoose.Schema({
    blogId:{
        type: Number,
        unique: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    blogTitle:{
        type:String,
        required: true, 
    },
    tagArray:{
        type: Object
    },
    textAreaArray:{
        type: Object
    },
    viewCount:{
        type: Object
    },
    totalView:{
        type: Number,
        default:0,
    },
    status:{
        type: Number,
        default:0,
    },
    type:{
        type: Number,
        default:1,
    },
    tag:  {
        type: String,
        default: "General"
    },
    url: {
        type: String,
    },
    date:  {
        type: Date,
        default: Date.now
    }
}, { minimize: false });

module.exports = mongoose.model('blogs',blogsSchema)