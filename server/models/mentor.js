const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

mongoose.Promise = global.Promise;

const mentorSchema = new Schema({
    fullname: {
        type: String,
        default: null
    },
    username: {
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
    }
});

mentorSchema.pre('save', function (next) {
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

mentorSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('Mentor', mentorSchema);
