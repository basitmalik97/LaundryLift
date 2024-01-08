const mongoose = require('mongoose');
const { Schema } = mongoose;

const Order = require('./Order');

const bcrypt = require('bcrypt');


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 20,
    },
    orders: [Order.schema]
});


userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 15;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();

  });
  userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

  const User = mongoose.model('User', userSchema);
  
  module.exports = User;
