class BaseElement {

    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
    };

    async getElement(){
        const element = await $(this.locator);
        return element;
    }

    async getElements(){
        const element = await $$(this.locator);
        return element;
    }
    
    async getLocator() {
        return this.locator;
    }

    async getName() {
        return this.name;
    }

    async isDisplayed(timeout){
        let element;
        try{
            element = this.getElement();
            return element.waitForDisplayed({timeout})
        }catch{
             element = false;
        }
        return element;
    }

    async isEnabled(timeout){
        let element;
        try{
            element = this.getElement();
            return element.waitForEnabled({timeout})
        }catch{
             element = false;
        }
        return element;
    }
    
    async click() {
        const element = await this.getElement();
        await element.waitForClickable();
        await element.click();
    }

    async getValue() {
        const element = await this.getElement();
        return element.getValue();
    }

    async getCSSProperty(value){
        const element = this.getElement();
        return element.getCSSProperty(value)
    }

    async getBackgroundColor(){
        return this.getCSSProperty('background-color');
    }

    async getAttribute(value){
        const element = this.getElement();
        return element.getAttribute(value);
    }

    async getText() {
        const element = await this.getElement();
        return element.getText();
    }
}
export default BaseElement;
//module.exports = BaseElement;