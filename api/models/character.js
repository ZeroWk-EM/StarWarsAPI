const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('character', characterSchema);