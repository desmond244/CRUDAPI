const { Schema, default: mongoose } = require("mongoose");
const productSchema = new Schema(
  {
    name: String,
    quantity: {
      type: Number,
      reqired: true,
      default: 0,
    },

    price: {
      type: Number,
      reqired: true,
    },

    image: {
      type: String,
      required: false,
    },
  },

  {
    timestamp: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
