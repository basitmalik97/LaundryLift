const { User, Order } = require('../models');

const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },
        orders: async () => {
            return await Order.find();
        }

    }
}
