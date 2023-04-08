const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
    {
    id: {type: Number},
    branch_logo: {type: String, required: true},
    branch_type: {type: String, required: true},
    branch_make: {type: String, required: true},
    branch_model: {type: String, required: true},
    branch_description: {type: String, required: true},
    branch_status: {type: Boolean, required: true},
    branch_year: {type: Number, required: true},
    },
    {timestamps: true}
    );
const Car = mongoose.model('Car',carSchema);
module.exports = Car;