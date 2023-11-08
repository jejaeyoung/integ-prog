const DigimonController = require('../controllers/digimon_controller');
 
module.exports = app => {
    app.post('/api/digimon/new', DigimonController.createNewDigimon)
    app.get('/api/digimon/all', DigimonController.findAllDigimon)
    app.get('/api/find/digimon/:id', DigimonController.findOneSingleDigimon)
    app.delete('api/delete/digimon/:id', DigimonController.deleteAnExistingDigimon)
}