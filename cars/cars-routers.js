const express = require("express");
const db = require('../data/connect');

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json( await db('cars'))
  } catch(err) {
    next(err)
  }
});

router.get("/:vin", async (req, res, next) => {
  try {
    const { vin } = req.params
    const car = await db('cars').where({ vin }).first()

    res.json(car)
  } catch(err) {
    next(err)
  }
});

module.exports = router;
