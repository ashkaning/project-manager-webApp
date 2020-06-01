const router = require("express").Router();
const role = require("./role");
const user = require("./user");
const getOneRole = require("./getOneRole");
/* Services */
const getOneService = require("./getOneService");
const service = require("./service");
const assignServicesAndAllCustomers = require("./assignServicesAndAllCustomers");
const getAllDeparments = require("./getAllDeparments");
/* Service Customer */
const serviceCustomer = require("./serviceCustomer")
////////////////////////////////////
router.use("/role", role);
router.use("/user", user);
router.use("/getOneRole", getOneRole);
/* Services */
router.use("/service", service);
router.use("/getOneService", getOneService);
router.use("/assignServicesAndAllCustomers", assignServicesAndAllCustomers);
router.use("/getAllDeparments", getAllDeparments);
/* Service Customer */
router.use("/serviceCustomer", serviceCustomer);

module.exports = router;
