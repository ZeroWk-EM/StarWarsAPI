const mongoose = require('mongoose');

const speciesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('species', speciesSchema);