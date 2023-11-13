//INF211-MERN-BACKEND-FFs112BcdiOO52-SETC -- QUILATAN,DANIEL SEBASTIAN G.
const PirateController = require('../controllers/pirate_controller');
 
module.exports = app => {
    app.get('/api/test',(req,res)=>{
        res.json({message:"the api is working"})}
        );
    
        app.post('/api/pirate/new',PirateController.newPirate);
        app.get('/api/pirate/show/:id',PirateController.findPirateById);
        app.get('/api/pirate/show/name/:name',PirateController.findPirateByName);
        app.put('/api/pirate/update/:id', PirateController.updatePirate)
        app.delete('/api/pirate/delete/:id', PirateController.findPirateByIdDelete)
        
        app.get('/api/pirate/position/:position', PirateController.findPirateByPosition)
        app.get('/api/pirate/all/pirates', PirateController.numberofPirates)

        app.get('/api/pirate/pegleg', PirateController.getPiratewithPegLeg)
        app.get('/api/pirate/hookhand', PirateController.getPiratewithHookHand)
        app.get('/api/pirate/eyepatch', PirateController.getPiratewithEyePatch)
    }