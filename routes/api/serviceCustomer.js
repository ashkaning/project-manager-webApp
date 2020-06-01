const router = require("express").Router();
const serviceCustomerController = require("../../controllers/serviceCustomerController");

router.route("/")
    .get(serviceCustomerController.getAllCustomers)

    module.exports = router;
