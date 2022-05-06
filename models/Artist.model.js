const {Schema, model} = require("mongoose");

const artistSchema = new Schema({
    name: {type: String, required: true, trim: true},
    studio: {type: String, trim: true},
    contact: {type: Number, required: true, match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/},
    email: {type: String, required: true, unique: true, match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/},
    password: {type: String, required: true},
    portfoly: []

})

const ArtistModel = model("Artist", artistSchema)

module.exports = ArtistModel