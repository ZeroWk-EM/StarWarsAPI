const mongoose = require('mongoose');

const droidSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('droid', droidSchema);