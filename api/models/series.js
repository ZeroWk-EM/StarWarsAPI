const mongoose = require('mongoose');

const seriesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('series', seriesSchema);