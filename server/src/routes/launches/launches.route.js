const express = require('express');

const  { httpGetAllLaunches } = require('./launches.controller');


const launchRouter = express.Router();


launchRouter.get('/lun', httpGetAllLaunches);

module.exports = launchRouter;