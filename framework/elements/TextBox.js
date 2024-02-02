import BaseElement from "./BaseElement.js";
import Logger from "../log/Logger.js";

class TextBox extends BaseElement{

    constructor(locator, name){
        super (locator, name);
    }
    async getText() {
        Logger.logDebug(`Getting the text of ${this.name} element.`)
        const textBoxElement = await this.getElement();
        return textBoxElement.getValue();
    }

    async clearAndType(text) {
        Logger.logDebug(`Adding ${text} in ${this.name} element .`)
        let element = await this.getElement();
        await element.setValue(text);
    }

    async addValue(value) {
        Logger.logDebug(`Adding value in ${this.name} element .`)
        let element = await this.getElement();
        await element.addValue(value);
    }

    async getPlaceholder() {
        return this.getAttribute('placeholder');
    }  
}
export default TextBox;
