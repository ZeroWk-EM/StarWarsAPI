const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('film', filmSchema);