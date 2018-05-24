const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const likesSchema = new Schema({
    userId: {
        type: String,
        default: null
    },
    questionId: {
        type: String,
        default: null
    },
    like: {
        type: Boolean,
        default: false
    },
    dislike: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true
    });
module.exports = mongoose.model('LikesAndDislikes', likesSchema);
