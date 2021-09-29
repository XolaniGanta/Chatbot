require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initwebRoutes from "./routes/web";

let app = express();

//config view engine
viewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//initwebroutes
initwebRoutes(app);

let port = process.env.port || 8080;

app.listen(port, ()=>{
    console.log("Webhook listening... :"+port);
})
