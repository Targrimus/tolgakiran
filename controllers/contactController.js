const contactController = (req,res) => {
    res.status(200);
    res.render('contact',{
        title: 'Contact Us',
        content: 'You may have get in contact with me. Just fill explain what you want'
    })
}

module.exports = contactController;