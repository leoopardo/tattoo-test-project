const router = require("express").Router();
const ArtistModel = require("../models/Artist.model");

router.post("/new-artist", async (req, res) => {
    try {
        const createArtist = ArtistModel.create(req.body);
        return res.status(201).json("Artist account created:")

    } catch(err){
        console.error(err)
        return res.status(500).json(err);
    }
});

module.exports = router
