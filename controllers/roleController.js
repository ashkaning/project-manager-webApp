const db = require("../models")

module.exports = {
    create: function (req, res) {
        db.Roles
            .create({
                name: req.body.name,
                description: req.body.description
            })
            .then((dbModel) => {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    getAll: function (req, res) {
        db.Roles.findAll({})
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    deleteOneRole: function (req, res) {
        console.log('---------------------------------')
        // console.log(req.body)
        db.Roles.destroy({ where: { id: req.body.id } })
            .then(resModel => {
                res.json(resModel);
            })
            .catch(err => res.status(422).json(err));
    },
    getOneRole: function (req, res) {
        db.Roles.findOne({ where: { id: req.body.id } })
            .then(resOneRole => {
                res.json(resOneRole)
            })
            .catch(err => res.status(422).json(err));
    },
    updateOneRole: function (req, res) {
        db.Roles.update({ name: req.body.name, description: req.body.description},{where: { id: req.body.id } })
        .then(resUpdateOne=>{
            res.json(resUpdateOne)
        }) .catch(err => res.status(422).json(err));
    }
}