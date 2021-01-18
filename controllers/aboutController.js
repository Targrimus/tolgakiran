const aboutController = (req, res) => {
    res.render('about',{
        title: 'About Page', 
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nam similique officiis nesciunt fugiat rem asperiores odit? Voluptatibus sequi culpa numquam qui? Sapiente reiciendis harum, suscipit illo cupiditate vel voluptatibus minima quisquam facilis ducimus fuga commodi dolore enim eum architecto aut tempora adipisci neque? Ratione, labore? Quidem esse ipsam maiores facilis possimus molestias sint dolorem necessitatibus perferendis, alias deserunt inventore, expedita ratione ipsum omnis in odit, nostrum amet perspiciatis! Earum, exercitationem. Adipisci ipsum commodi odit aliquam esse, itaque exercitationem accusamus pariatur, porro et magni hic eius! Dicta velit voluptas, quaerat unde deserunt qui ducimus, quas ad quam asperiores fugit maiores!'
    });
}

module.exports = aboutController;