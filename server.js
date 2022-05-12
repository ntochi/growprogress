const express = require("express");
const path = require("path");

const app = express();
const csv = require("csvtojson");

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(__dirname + "/images"));
app.use("/assets", express.static(__dirname + "/assets"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

// Create a get method for /data route
app.get("/data", async function (req, res) {
    // Convert csv to json
    const data = await csv().fromFile(__dirname + "/data/sfdv_data.csv");

    // Send json data
    res.send(data);
});

app.listen(8080, function () {
    console.log("listening on port: 8080!");
});
