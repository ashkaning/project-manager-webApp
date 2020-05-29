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
    }
}