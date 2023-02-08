const mongoose = require('mongoose');

const creatureSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    surname: { type: String, required: true }
});

module.exports = mongoose.model('creatures', creatureSchema);