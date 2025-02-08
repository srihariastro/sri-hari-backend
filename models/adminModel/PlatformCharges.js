const mongoose = require('mongoose');

const PlatformChargesSchema = new mongoose.Schema({
    platformChargeAmount: {
        type: Number,
        required: true,
    },
    platformChargeDescription: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const PlateformCharges = mongoose.model('PlatformCharges', PlatformChargesSchema);

module.exports = PlateformCharges;