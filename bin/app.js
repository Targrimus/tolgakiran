// requirements
const express = require("express");
const expbs = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");
const { promises } = require("fs");

require("dotenv").config();



// application starts here
const app = express();

// other constants
const port = 3000 | process.env.PORT;
const __basedir = process.cwd();

// Sending static files with Express 
app.use(express.static(path.join(__basedir,'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//handlebars configration
const hbs = expbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__basedir, 'views/layouts'), // change layout folder name
    partialsDir: path.join(__basedir, 'views/partials'), // change partials folder name

    // create custom express handlebars helpers examples
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



//db connection and timer
const timer = Date.now();
mongoose.connect(process.env.DB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex:true })
    .then((result)=>{
        console.log("connection timer: ", Date.now()-timer," miliseconds");
        app.listen(port,(error)=>{
            console.log("App started on port", port);
        })
    })
    .catch((error)=>{
        console.log(error);
    });


