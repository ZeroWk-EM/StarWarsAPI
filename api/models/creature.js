const mongoose = require('mongoose');

const creatureSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('creature', creatureSchema);