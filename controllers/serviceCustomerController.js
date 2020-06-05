const db = require("../models")

module.exports = {
    getAllCustomers: function (req, res) {
        db.Client_Service.findAll({
            group: ['clientId'],
            include: [{ model: db.Users, require: true }]
        })
            .then(dbModel => {
                res.json(dbModel.data.Client_Service)
            })
            .catch(err => res.status(422).json(err));
    },
    getServicesCustomer: (req, res) => {
        db.Client_Service.findAll({
            where: { clientId: req.body.clientId },
            include: [{ model: db.Users, require: true },
            { model: db.Services, require: true }]
        }).then(resModel => {
            //console.log(resModel)
            res.json(resModel)
        })
            .catch(err => res.status(422).json(err));
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
        console.log(req.body)
        db.Client_Service.update({
            employeeId: req.body.content
        },
            { where: { id: req.body.id } }
        ).then(resModel => {

            res.json(resModel)
        })
            .catch(err => res.status(422).json(err));
    }
}