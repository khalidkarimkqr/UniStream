const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
     lastName: {
        type: String,
        required: true,
    },
     passwrod: {
        type: String,
        required: true,
    },
    registeredEvents: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Event",
        },

    ],
    role : {
        type: String,
        enum : ["admin", "user"],
        default: "user",
    },
}, {timestamps: true})

const User = mongoose.model("User", userSchema);

module.exports = User;

