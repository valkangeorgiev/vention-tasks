import BaseElement from "./BaseElement";
// const BaseElement = require("./BaseElement")

class Label extends BaseElement{

    constructor(locator, name){
        super (locator, name);
    }
}
export default Label;
// module.exports = Label;