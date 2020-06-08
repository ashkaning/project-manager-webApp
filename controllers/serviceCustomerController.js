const db = require("../models")

module.exports = {
    getAllCustomers: function (req, res) {
        db.Client_Service.findAll({
            limite: 2,
            group: ['clientId'],
            include: [{ model: db.Users, require: true, attributes: { exclude: ["password"] } }],

        })
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    getServicesCustomer: (req, res) => {
        db.Client_Service.findAll({
            where: { clientId: req.body.clientId },
            include: [{
                model: db.Users,
                require: true,
                attributes: { exclude: ['password'] }
            },
            { model: db.Services, require: true }],
        }).then(resModel => {
            res.json(resModel)
        })
            .catch(err => res.status(422).json(err))

    },
    updateServiceStatus: function (req, res) {
        console.log(req.body)
        db.Client_Service.update({
            status: req.body.content
        },
            { where: { id: req.body.id } }
        ).then(resModel => {

            res.json(resModel)
        })
            .catch(err => res.status(422).json(err));
    },
    updateServiceEmployee: function (req, res) {
        db.Client_Service.update({
            employeeId: req.body.content
        },
            { where: { id: req.body.id } }
        ).then(resModel => {

            res.json(resModel)
        })
            .catch(err => res.status(422).json(err));
    },
    serviceCustomerAssignedEmployeeUpdate: function (req, res) {
        db.Client_Service.update(
            { employeeId: req.body.employeeId },
            { where: { id: req.body.id } }
        ).then(resModel => {
            res.json(resModel)
        }).catch(err => res.status(422).json(err));
    }
}