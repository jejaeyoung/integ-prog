const PokemonController = require('../controllers/pirate_controller');
 
module.exports = app => {
    app.get('/api/test',(req,res)=>{
        res.json({message:"the api is working"})}
        );
    app.post('/api/pokemon/new',PokemonController.newPokemon);
    app.put('/api/pokemon/update/:id',PokemonController.updatePokemon);
    app.get('/api/pokemon/all',PokemonController.findAllPokemon);
    app.get('/api/pokemon/:pname',PokemonController.findPokemonByName);
    app.delete('/api/pokemon/delete/:id',PokemonController.findPokemonByIdDelete);
   
}