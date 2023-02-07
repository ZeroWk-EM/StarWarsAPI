const mongoose = require('mongoose');

const starshipSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('starship', starshipSchema);