const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true, match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/},
    password: {type: String, required: true, match: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/},
    FavArtists: []
})

const UserModel = model("User", userSchema)

module.exports = UserModel