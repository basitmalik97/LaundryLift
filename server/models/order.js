const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    itemQuantity: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    pickUpTime: {
        type: Date,
        required: true
    },
    dropOffTime: {
        type: Date,
        required: true
    },
    fragrance: {
        type: Boolean,
    },
    ironing: {
        type: Boolean,
    },
    dryCleaning: {
        type: Boolean,
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;