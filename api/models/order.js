const mongoose = require('mongoose');

// Layout (or) design of object you want to use
const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Order', orderSchema);