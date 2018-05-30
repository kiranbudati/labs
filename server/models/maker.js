const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

mongoose.Promise = global.Promise;
const makerSchema = new Schema({
    hallticket: {
        type: String,
        default: null
    },
    fullname: {
        type: String,
        default: null
    },
    password: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    token: {
        type: String,
        default: null
    },
    verified: {
        type: Boolean,
        default: false
    },
    gender: {
        type: String,
        default: null
    },
    mobile: {
        type: String,
        default: null
    },
    profilePic:{
        type: String,
        default: null
    },
    education: {
        collegeName: {
            type: String,
            default: null
        },
        branch: {
            type: String,
            default: null
        },
        year: {
            type: Number,
            default: null
        },
        sem: {
            type: String,
            default: null
        },
    },
    project: {
        projectTitle: {
            type: String,
            default: null
        },
        projectDescription:{
            type: String,
            default: null
        },
        projectDomain:{
            type: String,
            default: null
        },
        projectSubDomain:{
            type: String,
            default: null
        },
        projectDuration:{
            startDate:{
                type: Date,
                default:null
            },
            endDate:{
                type: Date,
                default: null
            }
        }
    },
    dob: {
        type: String,
        default: null
    }
});

makerSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    else {
        bcrypt.hash(this.password, null, null, (err, hash) => {
            if (err) return next(err);
            this.password = hash;
            next();
        });
    }
});

makerSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('Maker', makerSchema);
