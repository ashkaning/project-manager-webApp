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
            }).catch(err => console.log(err))
    }
}