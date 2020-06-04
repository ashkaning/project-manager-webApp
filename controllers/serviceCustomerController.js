const db = require("../models")

module.exports = {
    getAllCustomers: function (req, res) {
        db.Client_Service.findAll({
            group: ['clientId'],
            include: [{ model: db.Users, require: true }]
        })
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    getServicesCustomer: (req, res) => {
        db.Client_Service.findAll({
            where: { clientId: req.body.clientId },
            include: [{ model: db.Users, require: true },
            { model: db.Services, require: true }]
        }).then(resModel => {

            res.json(resModel)
        })
            .catch(err => res.status(422).json(err));
    },
    updateServiceStatus: function(req, res){
        console.log(req.body)
        /* db.Client_Service.update({

        }) */
    }
}