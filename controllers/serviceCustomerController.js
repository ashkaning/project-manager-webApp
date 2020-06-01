const db = require("../models")

module.exports = {
    getAllCustomers: function (req, res) {
        db.Client_Service.findAll({
            include: [{ model: db.Users, require: true }]
        })
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    }
}