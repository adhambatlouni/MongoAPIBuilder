var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema(
    {
      unique_id: {
        type: Number,
        required: true,
      },
      item_name: {
        type: String,
        required: true,
        unique: true,
      },
      item_category: {
        type: String,
        required: true,
      },
      item_price: {
        type: Number,
        required: true,
      },
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Item", itemSchema);
