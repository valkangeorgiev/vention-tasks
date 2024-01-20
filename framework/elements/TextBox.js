import BaseElement from "./BaseElement";

class TextBox extends BaseElement{

    constructor(locator, name){
        super (locator, name);
    }

    async setValue(value) {
        let element = await this.getElement();
        await element.setValue(value);
    }

    async addValue(value) {
        let element = await this.getElement();
        await element.addValue(value);
    }

    async getPlaceholder() {
        let element = await this.getElement();
        return element.getAttribute('placeholder');
    }
}
export default TextBox;