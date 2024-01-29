
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
        const elements = await $$(this.locator);
        return elements;
    }
    
    async getLocator() {
        return this.locator;
    }

    async getName() {
        return this.name;
    }

    async waitForDisplayed(timeout){
        let element = await this.getElement();
        try{
            await element.waitForDisplayed(timeout);
            return true;
        }catch(e){
             return false;   
        }  
    }

    async waitForEnabled(timeout){
        let element = await this.getElement();
        try{
            await element.waitForEnabled({timeout});
            return true;
        }catch(e){
             return false;   
        }  
    }

    async isDisplayed(){
         let element = await this.getElement();
         return element.isDisplayed();
    }

    async isEnabled(timeout){
        let element = await this.getElement();
        try{
            await element.waitForEnabled({timeout});
            return true;
        }catch{
             return false;
        } 
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

    async getCSSProperty(property){
        const element = await this.getElement();
        return element.getCSSProperty(property)
    }

    async getBackgroundColor(){
        return this.getCSSProperty('background-color');
    }

    async getAttribute(attribute){
        const element = await this.getElement();
        return element.getAttribute(attribute);
    }

    async getText() {
        const element = await this.getElement();
        return element.getText();
    }
}
export default BaseElement;