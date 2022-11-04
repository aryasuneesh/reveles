const router = require('express').Router();
const { models } = require('mongoose');
const Marker = require('../models/Markers');

router.post('/', async (req, res) => {
    const newMarker = new Marker(req.body);
    try {
        const savedMarker = await newMarker.save();
        res.status(200).json(savedMarker);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const markers = await Marker.find();
        res.status(200).json(markers);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;