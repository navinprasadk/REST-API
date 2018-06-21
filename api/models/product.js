const mongoose = require('mongoose');

// Layout/ design of object you want to use
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
});

module.exports = mongoose.model('Product', productSchema);