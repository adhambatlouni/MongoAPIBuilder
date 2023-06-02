var mongoose = require('mongoose');

var managerSchema = new mongoose.Schema(
    {
      unique_id: {
        type: Number,
        required: true,
      },
      
      manager_name: {
        type: String,
        required: true,
      },
      
      manager_email: {
        type: String,
        required: true,
        unique: true,
      },

      manager_contactno: {
        type: String,
        required: true,
        unique: true,
      },
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Manager", managerSchema);
