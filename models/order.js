var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema(
    {
      unique_id: {
        type: Number,
        required: true,
      },

      customer_name: {
        type: String,
        required:true,
      },

      item_name: {
        type: String, 
        required:true,   
      },

      manager_name: {
        type: String,
        required:true,
      },

      image: {
        data: Buffer,
        contentType: String,
      },     
    },

    { timestamps: true }
  );

module.exports = mongoose.model("Order", orderSchema);
