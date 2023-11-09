const mongoose = require('mongoose'); 
const {Schema, model} = mongoose;

const DigimonSchema = new Schema({
  digimon_name: {
    type: String, //validation
    // // required: true,
    // unique: true,
    // trim: true, //if someone types in some spaces, it will be trimmed off
    // minlength: 3 //minimum of 3 characters long
  },
  digimon_age:{
    type: Number,
    // unique: true,
    // required: true
  },
  digimon_img:{
    type: String
  },
  digimon_element:{
    type: String
  },
  digimon_category:{
    type: String
  },
  digimon_gender:{
    type:String
  }
},
{
  timestamps: true, //will automatically create field for when it was created
});

const Digimon = model('Digimon', DigimonSchema);

module.exports = Digimon;