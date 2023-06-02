var mongoose = require('mongoose');

var shopSchema = new mongoose.Schema(
    {
      unique_id: {
        type: Number,
        required: true,
      },
      shop_name: {
        type: String,
        required: true,
      },
      shop_email: {
        type: String,
        required: true,
      },
      shop_contactno: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Shop", shopSchema);
