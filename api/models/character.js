const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    surname: { type: String, required: true },
    birth_year: { type: String, required: true },
    species: { type: String, required: true },
    gender: {
        type: String,
        enum: {
            values: ['Male', 'Famale', 'Other', 'Unknown', 'N/A'],
            message: '{VALUE} is not supported, see the documentation for see acceptable values'
        }
    },
    eye_color: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    skin_color: { type: String, required: true },
    organization: { type: [String] },
    homeworld: { type: String, required: true },
    films: { type: [String] },
    series: { type: [String] },
    starships: { type: [String] },
    vehicles: { type: [String] },
    weapons: { type: [String] }
});

module.exports = mongoose.model('characters', characterSchema);