"use strict";

const http = require("http");
const { math, string } = require("./functionModule");

let result = math(10, 20);
let strResult = string("Hallo", " Teilnehmer")

const server = http.createServer((req, res) => {
    res.write('Ich habe verstanden wirklich!');
    res.write('\n');
    res.write(result);
    res.write('\n');
    res.write(strResult);
    res.end();
})

server.listen(3000);