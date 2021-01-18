const fourofourController = (req, res) => {
        res.status(404);
        res.render('404',{
            title: '404 Error', 
            content: 'The page can not be found !'
        });
    }

module.exports = fourofourController;