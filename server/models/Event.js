const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ["not started", "started","completed"],
    default: "not started"
  },
  registeredUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createdBy :{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
},
 { timestamps: true }
);


const Event = mongoose.model("Event", eventSchema)

module.exports = Event;







