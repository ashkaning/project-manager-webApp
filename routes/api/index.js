const router = require("express").Router();
const role = require("./role");
const user = require("./user");
const service = require("./service");
const getOneRole = require("./getOneRole");
////////////////////////////////////
router.use("/role", role);
router.use("/user", user);
router.use("/service", service);
router.use("/getOneRole", getOneRole);

module.exports = router;
