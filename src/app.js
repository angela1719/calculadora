const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
const routerHome = require('./routes/homeRoutes/homeRoutes');
app.use(session({
    secret : 'CLAVE O NOMBRE DEL PROYECTO',
    resave :true,
    saveUninitialized: true
}));

app.listen(3000, ()=>{
    console.log("servidor activo en el puerto 3000");
});

app.use("/", routerHome)