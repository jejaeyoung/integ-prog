const mongoose = require('mongoose');
const PokemonSchema = new mongoose.Schema({
    p_name: {
        type: String
    },
    p_age: {
        type: Number
    },
    p_img: {
        type: String
    },
    p_level: {
        type: Number
    },
    p_type: {
        type: String
    }
});
const Pokemon = mongoose.model('Pokemon', PokemonSchema);
module.exports = Pokemon;