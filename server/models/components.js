const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const componentSchema = new Schema({
    componentTitle : {
        type: String,
        default: null
    },
    componentDescription: {
        type: String,
        default: null
    },
    advantages: [{
        type: String,
        default: null
    }],
    disAdvantages : [{
        type: String,
        default: null
    }],
    applications: [{
        type: String,
        default: null
    }],
    features: [{
        type: String,
        default: null
    }],
    componentImages : [{
        type: String,
        default: null
    }],
    otherImages: [{
        type: String,
        default: null
    }],
    others: [{
        heading: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        }
    }]
},
    {
        timestamps: true
    });
module.exports = mongoose.model('Component', componentSchema);
