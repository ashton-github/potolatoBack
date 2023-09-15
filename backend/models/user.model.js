const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {type: String, require:true},
        firstName: {type: String},
        lastName: {type: String},
        password: {type: String, require:true},
        email: {type: String, require:true},
        roles: [{
            id: {type: Number, require:true},
            name: {type: String, require:true}
        }]

    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("user", userSchema);
