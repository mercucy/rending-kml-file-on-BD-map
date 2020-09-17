let express = require('express');
let path = require('path');
let fs = require('fs');
let parseKML = require('./parseKML.js');

let router = express.Router();


router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/index.html"));
})

router.post("/get_data", (req, res) => {
    let kmlstr = fs.readFileSync('./新益村B地块基坑图纸.kml', { encoding: 'utf-8' });
    let KmlData = parseKML(kmlstr);
    res.send(KmlData);
})

module.exports = router;