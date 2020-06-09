const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = {
    verify: (username, password, done) => {
        db.Users.findOne({ where: { email: username.body.email } })
            .then(user => {
                if (!user) {
                    console.log('===========================')
                    console.log(username.session)
                    return password.json(username.session)
                }
                return bcrypt.compare(username.body.password, user.password)
                    .then(match => {
                        console.log(username.session)
                        if (match) {
                            username.session.userId = user.dataValues.id
                            username.session.isUserLoggin = true;
                            return password.json(username.session)
                        }
                        return password.json(username.session)
                    })
                    .catch(err => done(err));
            })
            .catch(err => done(err));
    },
    serializeUser: (user, done) => done(null, user._id),
    deserializeUser: (id, done) => {
        db.Users.findById(id)
            .then(user => {
                console.log(user)
                done(null, user);
            })
            .catch(err => done(err));
    },
    isLoggedIn: (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/login');
        }
    },
    isLoggedInPage: (req, res, next) => {

        if (req.session.isUserLoggin) {
            let data = {
                isUserLoggin: req.session.isUserLoggin,
                isSuccess: 'Yes',
                userId: req.session.userId
            }
            res.json(data)
        } else {
            let data = {
                isUserLoggin: false,
                isSuccess: "No"
            }
            res.json(data)
        }
    },
    checkSession: (req, res) => {
        if (req.session.isUserLoggin === false) {
            let data = {
                isSuccess: "No"
            }
            return res.json(data)
        }
        let data = {
            authorId: req.session.authorId,
            isUserLoggin: req.session.isUserLoggin
        }
        res.json(data)

    }
}