const mongoose = require('mongoose');

const organizationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('organization', organization);