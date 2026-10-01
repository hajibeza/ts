const utils = require("./Utils").Utils;
const unit_test = async () => {
    if (utils.add(2, 3) === 5) {
        console.log("Test add passed");
    }
    else {
        console.log("Test add failed");
        return;
    }
};
unit_test();
export {};
//# sourceMappingURL=Test1.js.map