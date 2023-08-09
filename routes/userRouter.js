const express = require('express');

const router = express.Router();

const userController =require ("../controllers/userController.js");

router.post("/createUser", userController.createUser);

router.get("/getUser", userController.getUser);

module.exports = router;