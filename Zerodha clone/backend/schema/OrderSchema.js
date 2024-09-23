const {Schema} = require("mongoose");

const OrderSchema = new Schema({
    name: String,
    price: Number,
    percent: Number,
    isDown: String,
});
module.exports = {OrderSchema}