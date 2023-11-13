//INF211-MERN-BACKEND-FFs112BcdiOO52-SETC -- QUILATAN,DANIEL SEBASTIAN G.
const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    pirate_name: {
        type: String
    },
    pirate_image: {
        type: String
    },
    num_of_treasure_chest: {
        type: Number
    },
    catch_phrase: {
        type: String
    },
    crew_position: {
        type: String
    },
    peg_leg: {
        type: Boolean
    },
    eye_patch: {
        type: Boolean
    },
    hook_hand: {
        type: Boolean
    }
});
const Pirate = mongoose.model('Pirate', PirateSchema);
module.exports = Pirate;