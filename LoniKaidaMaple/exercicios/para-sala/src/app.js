require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();



const database = require("./database/mongoConfig");

console.log("iniciando variaveis");

console.log("iniciando cors");
app.use(cors());

console.log("iniciando express");
app.use(express.json());

database.connect();

console.log("Conectando ao banco de dados");


let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let date = today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear();
let systemTime = time + " - " + date;

let printFigure1 = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⠙⣄⠀⠀⣀⡀⠤⠤⠤⠤⠤⠄⢀⡀⠀⣰⠁⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠈⠳⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢱⠇⠀⠀⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡔⠻⣄⣀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠃⠤⢰⠁⠳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡌⠀⠀⠂⢔⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⢡⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⠁⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣶⠶⠾⣧⠀⠈⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⠀⠀⢀⣤⣥⣤⣽⣄⣄⠀⠀⠀⠀⠀⠀⡰⢻⣿⣿⠀⠀⠸⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⠀⠀⢈⠀⠀⣿⣿⣏⠉⠂⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀⡀⠅⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠄⠀⢿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠈⡻⠋⢀⠐⠀⡐⠀⡟⢆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⢄⠘⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢁⡸⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡇⠀⠀⠰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇⢠⡾⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣡⠀⠀⠘⢦⠀⠀⠀⠀⠀⠀⠠⣄⠔⠒⠚⠁⠀⠀⠀⠀⠀⡜⠒⠙⠑⢄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡰⠁⠀⠀⠐⢮⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡜⠀⠀⠀⠀⠀⡁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢰⠁⠀⠀⠀⠐⠻⡀⠙⢦⣄⡀⠀⠀⠀⠀⠀⠀⠀⣀⡴⠞⢹⠁⠀⠀⠀⠀⢴⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢇⠀⠀⠀⠀⠀⢃⠀⠀⠀⠉⠳⣶⣦⣤⣶⣶⣿⡏⠀⠀⢜⠀⠀⠀⠀⠀⠀⠱⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡎⠀⠀⠀⠀⡴⠃⠀⠀⠀⠀⠀⣿⣿⣿⡿⠋⢸⠁⠀⠀⠀⠑⡀⠄⠀⠀⠀⢠⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⡸⠀⠀⠀⠀⠈⢡⠀⠀⠀⠀⡀⣰⣿⠿⠋⠀⠀⠸⡇⠀⠀⠀⠘⠇⠀⠀⠀⠀⠁⢱⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠣⡀⠀⠀⢀⠴⠏⠙⠋⠻⢯⣛⠋⠁⠀⠀⠀⠀⠀⠳⢦⣄⡀⠀⠑⡄⠀⠀⠀⣠⠎⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡕⢠⠔⠁⠀⠀⠀⠀⠀⠀⠙⠳⣤⡀⠀⠀⠀⠀⠀⢀⣈⡉⡿⠾⢤⡀⠀⠀⠉⡂⠀⠀⠀⠀⠀
⠀⠀⠀⣀⡴⠋⠁⠀⠀⠀⠀⡆⠀⠀⠀⠀⠀⠈⠹⠶⠦⠔⠒⠚⠉⠉⠂⠀⠀⠀⠉⢷⡀⣴⣥⠀⠀⠀⠀⠀
⠀⣠⠞⠉⠀⠀⠀⠀⠀⠀⠂⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⢸⡾⡊⠣⢄⡀⠀⠀⠀
⠞⠁⠀⠀⠀⠀⢀⡔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⡀⠸⡇⠑⠄⡀⠠⠉⠀⠀
`;




console.log("");
console.log('\x1b[31m%s\x1b[0m', printFigure1);
console.log('\x1b[33m%s\x1b[0m', systemTime);

app.get("/", (req, res)=>{
    res.status(200).send("Nya (OωO) 🍁🐼🍁");
})



module.exports = app, systemTime;