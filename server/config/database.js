const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    // url: 'mongodb://h-labs:h-labs@ds123770.mlab.com:23770/h-labs',
    url:'mongodb://127.0.0.1:27017/h-labs',
    secret: crypto,
};