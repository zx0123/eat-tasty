const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Locations = new Schema({}, { strict: false });

module.exports = mongoose.model("locations", Locations);
