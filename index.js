const express = require("express");
const app = express();
const PORT = 8080;
const {engine} = require("express-handlebars");


app.engine("handlebars", engine());
app.set("view engine" , "handlebars");
app.set("views", "/views");


app.get("/" (req , res) => {

});

app.listen (PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
})