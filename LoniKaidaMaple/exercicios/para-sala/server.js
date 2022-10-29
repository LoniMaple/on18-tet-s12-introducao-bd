require('dotenv').config();
const app = require("./src/app");
const PORT = process.env.PORT;

console.log("🟩🟩🟩🟩iniciando🟩🟩🟩");

app.listen(PORT, () => {
    console.log("🍁🍁🍁UwU started🍁🍁🍁");
})