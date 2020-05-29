const db = require("../models")

module.exports = {
    create: function (req, res) {
        db.Users
        .create({
            fName: req.body.fName,
            lName: req.body.lName,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            companyName: req.body.companyName,
            address: req.body.address,
            addressUnit: req.body.addressUnit,
            addressCity: req.body.addressCity,
            addressState: req.body.addressState,
            addressZip: req.body.addressZip,
            logo: req.body.logo,
            description: req.body.description,
            RoleId: req.body.roleId
        })
        .then((dbModel) => {
            res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    },
    getAll: function (req, res) {
        db.Users.findAll({
            include:[{model:db.Roles, require:true}]
        })
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    }
}