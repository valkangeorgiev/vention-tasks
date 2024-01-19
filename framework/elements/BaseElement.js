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
        try{
            let element = await $(this.locator);
            await element.waitForDisplayed({timeout})
        }catch{
            return false;
        }
    }

    async isEnabled() {
        const element = await this.getElement();
        return element.isEnabled();
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

    async getBackgroundColor(){
        const element = this.getElement();
        return element.getCSSProperty('background-color')
    }

    async getText() {
        const element = await this.getElement();
        return element.getText();
    }
}
export default BaseElement;