import BaseElement from "./BaseElement";
// const BaseElement = require("./BaseElement")

class Button extends BaseElement{
    
    constructor(locator, name){
        super (locator, name);
    }
}
export default Button;
// module.exports = Button;