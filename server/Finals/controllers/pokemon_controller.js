const Pokemon = require('../models/pokemon_model');
 
const findAllPokemon = (req, res) => {
    Pokemon.find()
        .then((allDaPokemon) => {
            res.json({ thePokemon: allDaPokemon })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
const findPokemonByName = (req, res) => {
    Pokemon.findOne({p_name:req.params.pname})
        .then((thePokemon) => {
            res.json({thePokemon})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
const findPokemonByIdDelete = (req, res) => {
    Pokemon.findByIdAndDelete({_id:req.params.id})
        .then((deletedPokemon) => {
            res.json({ thePokemon: deletedPokemon, message:"Successfully deleted the entry" })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
 
const newPokemon = (req, res) => {
    Pokemon.create(req.body)
        .then((newPokemon) => {
            res.json({ newPokemon: newPokemon,status:"successfully inserted" })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
const updatePokemon = (req, res) => {
    Pokemon.findByIdAndUpdate({_id:req.params.id},req.body,
        { new: true, runValidators: true })
        .then((updatedPokemon) => {
            res.json({ updatedPokemon: updatedPokemon,status:"successfully Updated the pokemon" })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports = {
    findAllPokemon,
    newPokemon,
    findPokemonByName,
    findPokemonByIdDelete,
    updatePokemon
}