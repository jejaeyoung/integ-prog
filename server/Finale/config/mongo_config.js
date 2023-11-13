//INF211-MERN-BACKEND-FFs112BcdiOO52-SETC -- QUILATAN,DANIEL SEBASTIAN G.
const mongoose = require('mongoose');
 
mongoose.connect('mongodb://127.0.0.1:27017/thepiratedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));