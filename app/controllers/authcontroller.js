var exports = module.exports = {}

exports.signup = function(req, res) {
    res.render('signup');
}

exports.signin = function(req, res) {
    res.render('signin');
}

// Grab ID and access Database

exports.dashboard = function(req, res) {
    console.log(req.user);
    console.log(req.body);
    res.render('dashboard');
}

exports.account = function(req, res) {
    res.render('account');
}

exports.profile = function(req,res){
    var userObj = req.user;
    res.render('profile');
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');

    });

}
