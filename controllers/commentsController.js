const db = require('../models');

module.exports = {
    lastComment: (req, res) => {
        db.Comments.findOne({
            where:
            {
                ClientServiceId: req.body.serviceId
            },
            order: [['updatedAt', 'DESC']]
        })
            .then(result => {
                res.json(result)
            }).catch(err => res.status(422).json(err))
    },
    allComments: (req, res) => {
        db.Comments.findAll({
            where: {
                ClientServiceId: req.body.ClientServiceId
            },
            include: [{
                model: db.Users,
                require: true,
                attributes: { exclude: ['password'] }
            }],
        }).then(result => {
            res.json(result)
        }).catch(err => res.status(422).json(err))
    },
    saveComment: (req, res) => {
        db.Comments.create({
            comment: req.body.comment,
            UserId: req.body.UserId,
            ClientServiceId: req.body.ClientServiceId
        }).then(result => {

            res.json({
                UserId: req.body.UserId,
                ClientServiceId: req.body.ClientServiceId
            });
        }).catch(err => res.status(422).json(err))
    }
}