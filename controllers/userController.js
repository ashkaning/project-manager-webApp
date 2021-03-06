const db = require("../models")
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');

module.exports = {
    create: function (req, res) {
        db.Users.findOne({ where: { email: req.body.email } })
            .then(resultOne => {
                if (resultOne === null) {
                    bcrypt.genSalt()
                        .then(salt => {
                            bcrypt.hash(req.body.password, salt, function (err, hash) {
                                db.Users
                                    .create({
                                        fName: req.body.fName,
                                        lName: req.body.lName,
                                        email: req.body.email,
                                        phone: req.body.phone,
                                        password: hash,
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
                                    .catch(err => {
                                        console.log(err)
                                        res.status(422).json(err)
                                    }
                                    );
                            })
                        }).catch(err => res.status(422).json(err));
                }
                else {
                    res.status(422);
                }
            })
    },
    getAll: function (req, res) {
        db.Users.findAll({
            include: [{ model: db.Roles, require: true }],
            attributes: { exclude: ["password"] }
        })
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    getAllDepartmnet: function (req, res) {
        db.Users.findAll({
            where: {
                RoleId: {
                    [Op.ne]: 13
                }
            },
            attributes: { exclude: ["password"] },
            include: [{ model: db.Roles, require: true }]
        })
            .then(resModel => {
                res.json(resModel)
            }).catch(err => res.status(422).json(err));
    },
    getOne: function (req, res) {
        db.Users.findOne({
            where: { id: req.body.id },
            include: [{ model: db.Roles, require: true }],
            attributes: { exclude: ["password"] }
        })
            .then(resOneRole => {
                res.json(resOneRole)
            })
            .catch(err => res.status(422).json(err));
    }
}