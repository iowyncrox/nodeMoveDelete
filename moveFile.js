"use strict";

var fs = require("fs");

fs.rename("createFile.js", "./lib/createFile.js", function (error) {
    if (error) {
        throw error;
    } else {
        console.log("File Moved");
    }
});

try {
    fs.unlinkSync("./lib/createFile.js");
    console.log("file removed");
} catch (error) {
    console.log(error);
}