const { Recette } = require("../model/Rectte")

const getrecette = async (req, res) => {
  try {
    const recette = await Recette.find();
    res.status(200).json(recette);
  } catch (error) {
    console.error("error in getUsers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  getrecette
};