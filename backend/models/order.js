const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const movieOrder = new Schema(
  {
    orderId: {
      type: Number,
      required: true,
    },
    orderDate: {
      type: Date,
      required: true,
    },
    movie: {
      type: Schema.Types.ObjectId,
      ref: 'Movie',
    },
  },
  {
    timestamps: true, //give time date when schema is added
  }
);
const order = mongoose.model('order', movieOrder);
module.exports = order;
