const { User, Order } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id)
          return user;
        }
  
        throw AuthenticationError;
      },
    // orders: async () => {
    //   return await Order.find();
    // },
  },
  Mutation: {
    registerUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
