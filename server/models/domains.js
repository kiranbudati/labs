const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const domainSchema = new Schema({
    domain:{
        type: String
    },
    subDomain:{
        type: String,
        default: null
    }
},
    {
        timestamps: true
    });
module.exports = mongoose.model('Domain', domainSchema);
