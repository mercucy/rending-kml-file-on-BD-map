//web config
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true, parameterLimit: 50000 }));
app.use(bodyParser.json());
app.use("/public", express.static("public"));

let mainRoute = require("./router/main.js");

app.use("/", mainRoute);

app.listen(8808);