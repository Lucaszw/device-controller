const APPNAME = "Device UI Controller";
const PORT = 3001;

const express = require('express');
const path = require('path');
const DeviceController = require('./src/device-controller2');

const app = express();

app.use(express.static(path.resolve(__dirname)));

app.listen(PORT, function () {
  console.log(`${APPNAME} listeneing on port: ${PORT}`);
});

function init() {
  DeviceController.createScene();
}

init();
