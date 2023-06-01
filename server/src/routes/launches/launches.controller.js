const launches = require('../../models/launches/launches.model')

function httpGetAllLaunches (req, res) { 
    return res.status(200).json(launches);
}

module.exports =  { httpGetAllLaunches };