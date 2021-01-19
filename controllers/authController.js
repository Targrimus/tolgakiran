module.exports.loginGetController = (req,res) => {
    res.status(200);
    res.render('login',{
        title: 'Log in',
        content: 'This page allows you to log in system.'
    });
};

module.exports.signupGetController = (req,res) => {
    res.render('signup',{
        title: 'Sign Up',
        content: 'Welcome to sign up page. Just be sure you have correctly filled the whole lines'
    })
};


module.exports.loginPostController = (req,res) => {
    res.send("login POST request");
};

module.exports.signupPostController = (req,res) => {
    res.send("signup POST request");
};

