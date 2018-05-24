var exports = module.exports = {}
var request = require('request');

exports.signup = function(req, res) {
    res.render('signup');
}

exports.signin = function(req, res) {
    res.render('signin');
}

exports.dashboard = function(req, res) {
    var userObj = req.user;
    res.render('dashboard', userObj);
}

exports.account = function(req, res) {
    res.render('account');
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');

    });
}
