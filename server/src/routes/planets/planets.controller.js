const planets = require("../../models/planets/planets.model");

function getAllPlanets (req, res){
    return res.status(200).json(planets);
};

//distructure object so that we can exports multiple functions
module.exports = { 
    getAllPlanets,
 };