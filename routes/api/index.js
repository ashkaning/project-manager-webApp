const router = require("express").Router();
/* Rol/Department */
const role = require("./role");
const getOneRole = require("./getOneRole");
/* Users */
const user = require("./user");
const oneUser = require("./getOneUser")
const login = require("./login")
const session = require("./session")
/* Services */
const getOneService = require("./getOneService");
const service = require("./service");
const assignServicesAndAllCustomers = require("./assignServicesAndAllCustomers");
const getAllDeparments = require("./getAllDeparments");
/* Service Customer */
const serviceCustomer = require("./serviceCustomer")
const serviceCustomerAssignedEmployeeUpdate = require("./serviceCustomerAssignedEmployeeUpdate")
////////////////////////////////////
/* Rol/Department */
router.use("/role", role);
router.use("/getOneRole", getOneRole);
/* Users */
router.use("/login", login)
router.use("/session", session)
router.use("/user", user);
router.use("/getOneUser", oneUser);
/* Services */
router.use("/service", service);
router.use("/getOneService", getOneService);
router.use("/assignServicesAndAllCustomers", assignServicesAndAllCustomers);
router.use("/getAllDeparments", getAllDeparments);
/* Service Customer */
router.use("/serviceCustomer", serviceCustomer);
router.use("/serviceCustomerAssignedEmployeeUpdate", serviceCustomerAssignedEmployeeUpdate)

module.exports = router;
