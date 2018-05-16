var exports = module.exports = {}
var router = require('./coffeeController.js')

exports.signup = function(req, res) {

    res.render('signup');

}

exports.profile = function(req, res) {
  res.render('profile', router);
}

exports.signin = function(req, res) {

    res.render('signin');

}

exports.dashboard = function(req, res) {

    res.render('dashboard');

}

exports.account = function(req, res) {

    res.render('account');

}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('/');

    });

}
