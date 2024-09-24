import express, { urlencoded } from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import "dotenv/config.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const portno = "3000";

app.use(express.static("public"));

app.use(urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.render("confirm.ejs");
})

app.listen(portno, (err) => {
    if (err) throw err;
    console.log(`Server is listening on port ${portno}`);
});