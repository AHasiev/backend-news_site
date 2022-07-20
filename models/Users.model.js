const mongoose = require("mongoose")

const usersSchema = ({
    login: {
        type: String,
        unique: true,
      },
      password: String,
    });

const User = mongoose.model("User", usersSchema)

module.exports = User;