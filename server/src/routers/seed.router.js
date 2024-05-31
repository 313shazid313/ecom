const express = require("express");
const { seedUser } = require("../controllers/seed.controller");
const seedforRoutingTest = express.Router();

seedforRoutingTest.get("/users", seedUser);

module.exports = seedforRoutingTest;
