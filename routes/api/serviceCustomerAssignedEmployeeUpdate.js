const router = require("express").Router();
const serviceCustomerController = require("../../controllers/serviceCustomerController");

router.route("/")
    .put(serviceCustomerController.serviceCustomerAssignedEmployeeUpdate)

    module.exports = router;
