const mongoose = require('mongoose');

const weaponsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('weapons', weaponsSchema);