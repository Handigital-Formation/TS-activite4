const express = require('express');

express().use(express.static(__dirname)).listen(8080);

console.log("HTTP server running on port 8080");
