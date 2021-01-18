const loginController = (req,res) => {
    res.status(200);
    res.render('login',{
        title: 'Log in',
        content: 'This page allows you to log in system.'
    });
};



module.exports = loginController;