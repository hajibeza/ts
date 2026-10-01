"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require("./Utils").Utils;
const unit_test = async () => {
    if (utils.add(2, 3) === 5) {
    }
    else {
        console.log("Test add failed");
        process.exit(1);
    }
    if (utils.add(3, 3) === 6) {
    }
    else {
        console.log("Test add failed");
        process.exit(1);
    }
};
unit_test();
