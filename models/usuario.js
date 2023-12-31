const {Schema, model } = require('mongoose')

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    surname: String, 
    nick: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "role_user"
    },
    image: {
        type: String, 
        default: "dafault.png"
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model("Usuario", UserSchema)