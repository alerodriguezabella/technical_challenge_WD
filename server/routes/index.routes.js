const router = require("express").Router();
const phones = require('../data/phones.json')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

router.get('/phones', (req, res) => {
  res.json(phones)
});

router.get('/phones/:id', (req, res) => {
  res.json(phones.find(phone => phone.id == req.params.id))
});

module.exports = router;
