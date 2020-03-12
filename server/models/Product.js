const mongoose = require("mongoose");
const User = require("./User");
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User"
    // },
    title: {
      type: String,
      maxLength: 50,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    images: {
      type: Array,
      default: []
    },
    continents: {
      type: Number,
      default: 1
    },
    stars: {
      type: Number,
      default: 1
    },
    rate: {
      type: Number,
      maxLength: 5,
      default: 0
    },
    features: {
      type: Array,
      required: true
    },
    views: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product ;
