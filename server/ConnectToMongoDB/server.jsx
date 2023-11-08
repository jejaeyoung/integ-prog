const express = require("express");
const app = express();
const port =8000;  
require("./config/mongoose.config");
 
const cors = require('cors');
 
app.use(express.json(), express.urlencoded({ extended: true }),cors());
 
   
const AllMyDigimonRoutes = require("./routes/digimon_routes");
AllMyDigimonRoutes(app);
   
app.listen(port, () => console.log("The server is all fired up on port 8000"));