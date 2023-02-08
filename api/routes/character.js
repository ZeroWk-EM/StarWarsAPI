// Import delle dipendenze
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Import della Struttura del DB
const Character = require("../models/character");

router.get("/",async (req, res) => {
    try {
        const result = await Character.find()
        res.send(result)
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = router;