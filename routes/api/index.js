const router = require("express").Router();
const role = require("./role");
const user = require("./user");
const service = require("./service");
const getOnerole = require("./getOneRole");
////////////////////////////////////
router.use("/role", role);
router.use("/user", user);
router.use("/service", service);
router.use("/getOnerole", getOnerole);

module.exports = router;
