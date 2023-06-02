var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema(
    {
      unique_id: {
        type: Number,
        required: true,
      },

      name: {
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
        unique: true,
      },
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Customer", customerSchema);
