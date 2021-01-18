

const homeController = (req, res) => {
    res.render('index',{
        title: 'Home Page', 
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quia.'
    });
}

module.exports = homeController;