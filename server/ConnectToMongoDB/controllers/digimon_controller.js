const Digimon = require('../models/digimon_collection');
 
const findAllDigimon = (req, res) => {
    //mongoose command
    Digimon.find()
        .then((allData) => {
            res.json({ AllDigimons: allData })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
const findOneSingleDigimon = (req, res) => {
    Digimon.findOne({ _id: req.params.id })
        .then(OneDigimon => {
            res.json({ Digimoan: OneDigimon })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
const createNewDigimon = (req, res) => {
    Digimon.create(req.body)
        .then(newlyCreatedDigimon => {
            res.json({ TheNewDigimon: newlyCreatedDigimon })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const deleteAnExistingDigimon = (req, res) => {
    Digimon.findOneAndDelete({ _id: req.params.id })
        .then(resultDigmon => {
            res.json({ deletedDigimon: resultDigmon })
            console.log("Digimon " +digimon_name+" has been deleted");
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}



module.exports = {findAllDigimon, findOneSingleDigimon, createNewDigimon, deleteAnExistingDigimon}