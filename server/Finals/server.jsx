const express = require("express");
const app = express();
const port=8000;  
require("./config/mongo_config");
const cors = require("cors");
app.use(express.json(), express.urlencoded({ extended: true }),cors());
//introduce your routes to the server
const PokeRoute = require("./routes/pokemon_routes");
PokeRoute(app);
   
app.listen(port, () => console.log("The server is all fired up on port 8000"));