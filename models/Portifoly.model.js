const {Schema, model} = require("mongoose");

const portifolySchema = new Schema({
    AllTattos: [{description: {type: String, maxlength: 100}, tattoo: {type: String, required: true}}]
})

const PortfolyModel = model("Portifoly", portifolySchema)

module.exports = PortfolyModel