const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const questionSchema = new Schema({
    questionTitle: {
        type: String,
        default: null
    },
    questionDescription: {
        type: String,
        default: null
    },
    questionImage: {
        type: String,
        default: null
    },
    userId: {
        type: String,
        default: null
    },
    askedBy: {
        type: String,
    },
    askAnonymously: {
        type: Boolean,
        default: false
    },
    domain: {
        type: String,
        default: null
    },
    subDomain: [
        {
            type: String,
            default: null
        }
    ],
},
    {
        timestamps: true
    });
module.exports = mongoose.model('Question', questionSchema);
