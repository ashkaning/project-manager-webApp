const db = require("../models")

module.exports = {
    getAll: function (req, res) {
        db.Services.findAll({})
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Services
            .create({
                serviceName: req.body.serviceName,
                serviceDescription: req.body.serviceDescription,
                subId: req.body.subId
            }).then((dbModel) => {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Services.destroy({ where: { id: req.body.deleleServiceId } })
            .then(resModel => {
                res.json(resModel);
            })
            .catch(err => res.status(422).json(err));
    },
    getOneService: function (req, res) {
        db.Services.findOne({ where: { id: req.body.id } })
            .then(resOneServ => {
                db.Services.findOne({ where: { id: resOneServ.dataValues.subId } })
                    .then(resParent => {
                        const sendServiceInfo = { resOneServ, resParent }
                        res.json(sendServiceInfo);
                    }).catch(err => res.status(422).json(err));
            })
            .catch(err => res.status(422).json(err));
    },
    updateOne: function (req, res) {
        db.Services.update({
            serviceName: req.body.serviceName,
            serviceDescription: req.body.serviceDescription,
            subId: req.body.subId,
        },
            { where: { id: req.body.id } }
        ).then(resModel => {
            res.json(resModel)
        }).catch(err => res.status(422).json(err));
    },
    getAllCustomers: function (req, res) {
        db.Users.findAll({ where: { RoleId: 13 } })
            .then(resModel => {
                res.json(resModel)
            }).catch(err => res.status(422).json(err));
    },
    serviceToCustomer: function (req, res) {
        for (let i of req.body.allServices) {
            db.Client_Service.create({
                ServiceId: i.id,
                clientId: req.body.customerId,
                employeeId: req.body.DeparmentId
            }).then(resModel => {
                console.log(resModel)
            }).catch(err => res.status(422).json(err));
        }
    }
}