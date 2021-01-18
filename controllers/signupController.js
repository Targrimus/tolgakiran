const signupController = (req,res) => {
    res.render('signup',{
        title: 'Sign Up',
        content: 'Welcome to sign up page. Just be sure you have correctly filled the whole lines'
    })
};


module.exports = signupController;