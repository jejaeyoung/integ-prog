const DigimonController = require('../controllers/digimon_controller');
 
module.exports = app => {
    //Crud guide for backend
    app.post('/api/digimon/new', DigimonController.createNewDigimon)
    app.get('/api/digimon/all', DigimonController.findAllDigimon)
    //find
    app.get('/api/find/digimon/:id', DigimonController.findOneSingleDigimon)
    app.get('/api/findname/digimon/:dname', DigimonController.findOneSingleDigimonbyName)
    //delete
    app.delete('/api/delete/digimon/:id', DigimonController.deleteAnExistingDigimon)
    //update
    app.put('/api/update/digimon/:id', DigimonController.updateExistingDigimon);
}