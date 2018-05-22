const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const commentSchema = new Schema({
    userId: {
        type: String,
        default: null
    },
    questionOId: {
        type: String,
        default: null
    },
    commentedBy:{
        type: String,
    },
    comment:{
        type: String,
    },
},
    {
        timestamps: true
    });
module.exports = mongoose.model('Comment', commentSchema);
