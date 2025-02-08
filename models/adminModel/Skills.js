const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  skill: {
    type: String,
    required: true,
    unique: true // Ensures each skill name is unique
  },
  image: {
    type: String
  }
},{ collection: 'Skills', timestamps: true });

const Skills = mongoose.model('Skills', skillSchema);

module.exports = Skills;
