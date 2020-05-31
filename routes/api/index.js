const router = require("express").Router();
const role = require("./role");
const user = require("./user");
const service = require("./service");
const getOneRole = require("./getOneRole");
const getOneService = require("./getOneService");
////////////////////////////////////
router.use("/role", role);
router.use("/user", user);
router.use("/service", service);
router.use("/getOneRole", getOneRole);
router.use("/getOneService", getOneService);

module.exports = router;
