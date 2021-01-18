// requirements
const express = require("express");
const expbs = require("express-handlebars");
const path = require("path");

// application starts here
const app = express();

// other constants
const __basedir = process.cwd();
const port = 3000 | process.env.PORT;

// Sending static files with Express 
app.use(express.static(path.join(__basedir,'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//handlebars configration
const hbs = expbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__basedir, 'views/layouts'), // change layout folder name
    partialsDir: path.join(__basedir, 'views/partials'), // change partials folder name

    // create custom express handlebars helpers
    helpers: {
        calculation: function(value) {
            return value * 5;
        },

        list: function(value, options) {
            let out = "<ul>";
            for (let i = 0; i < value.length; i++) {
                out = out + "<li>" +  options.fn(value[i]) + "</li>";
            }
            return out + "</ul>";
        }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


//router
const routes = require(path.join(__basedir,"routes/router.js"));
app.use(routes);


// start server
app.listen(port, (err)=>{
    if (err) throw err;
    console.log(`app is running on port ${port}`);
})

