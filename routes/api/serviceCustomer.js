const router = require("express").Router();
const serviceCustomerController = require("../../controllers/serviceCustomerController");

router.route("/")
    .get(serviceCustomerController.getAllCustomers)
    .post(serviceCustomerController.getServicesCustomer)
    .put(serviceCustomerController.updateServiceStatus)

    module.exports = router;
