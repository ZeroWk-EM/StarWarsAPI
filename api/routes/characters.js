const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Tua mamma è puttana"
    });
});

router.post('/', (req, res) => {
    const characters = {
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        aligned: req.body.aligned
    };
    res.status(201).json({
        message: "Character POST success",
        createCharacter: characters
    });
});

module.exports = router;