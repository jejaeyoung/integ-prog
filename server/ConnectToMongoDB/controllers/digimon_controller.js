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
            console.log("You've found Single Digimon");
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const findOneSingleDigimonbyName = (req, res) => {
    Digimon.findOne({ digimon_name: req.params.dname })
        .then(OneDigimon => {
            res.json({ Digimoan: OneDigimon })
            console.log("You've found Single Digimon");
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
    Digimon.deleteOne({ _id: req.params.id })
        .then(resultDigmon => {
            res.json({ deletedDigimon: resultDigmon })
            console.log("Digimon  has been deleted");
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const updateExistingDigimon = (req, res) => {
    Digimon.findOneAndUpdate({digimon_name:req.params.id},req.body,{ new: true, runValidators: true })
        .then(updatedDigimon => {
            res.json({ theupdatedDigimon: updatedDigimon })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}



module.exports = {
    findAllDigimon, 
    findOneSingleDigimon, 
    createNewDigimon, 
    deleteAnExistingDigimon,
    updateExistingDigimon,
    findOneSingleDigimonbyName
}