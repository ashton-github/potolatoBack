const express = require("express");
const User = require("../models/user.model");
const router = express.Router();
const {creat , getAll , getById , modify, toDelete } = require("../controllers/user.controller");


router.post('/', creat);

router.get('/', getAll);

router.get('/:id', getById);

router.put('/:id', modify);

router.delete('/:id', toDelete);


module.exports = router
