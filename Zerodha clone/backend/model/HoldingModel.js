const {model} = require("mongoose");

const {HoldingSchema} = require('../schema/HoldingSchema');

const HoldingModel = new model("holding",HoldingSchema); //create the collection

module.exports = {HoldingModel}

