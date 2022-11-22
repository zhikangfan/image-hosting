const express = require('express');
const dotenv = require('dotenv');
const mode = process.argv.includes('--development');
dotenv.config(mode ? {path: './development.env'} : {});
const app = express();

app.listen(process.env.PORT, () => {
    console.log("Runing...");
})