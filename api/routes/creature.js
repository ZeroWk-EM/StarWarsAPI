// Import delle dipendenze
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Import della Struttura del DB
const Creature = require("../models/creature");

router.get("/",async (req, res) => {
    try {
        const result = await Creature.find({},{name:1})
        res.send(result)
    } catch (error) {
        console.log(error.message);
    }
})
module.exports = router;