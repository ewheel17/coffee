var exports = module.exports = {}
var request = require('request');

exports.signup = function(req, res) {
    res.render('signup');
}

exports.signin = function(req, res) {
    res.render('signin');
}

// Grab ID and access Database

exports.dashboard = function(req, res) {
    var userObj = req.user;
    console.log(userObj);
    res.render('dashboard', userObj);
}

exports.account = function(req, res) {
    res.render('account');
}

exports.profile = function(req,res){
    var userObj = req.user;
    console.log(userObj);
    res.render('profile');
  };

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');

    });

}
