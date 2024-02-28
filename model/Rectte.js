const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecetteSchema = new Schema({
  name: String,
  etape1: String,
  etape2: String,
  image: String
});

const Recette = mongoose.model("Recette", RecetteSchema, "Recette");

module.exports = {
  Recette: Recette
};
