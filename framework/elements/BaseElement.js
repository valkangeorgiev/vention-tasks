import Logger from "../log/Logger.js";

class BaseElement {

    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
    };

    async getElement(){
        Logger.logDebug(`Getting the element of ${this.name}`)
        const element = await $(this.locator);
        return element;
    }

    async getElements(){
        Logger.logDebug(`Getting the elements of ${this.name}`)
        const elements = await $$(this.locator);
        return elements;
    }
    
    async getLocator() {
        Logger.logDebug(`Getting the locator of ${this.name}`)
        return this.locator;
    }

    async getName() {
        Logger.logDebug(`Getting the name of ${this.name}`)
        return this.name;
    }

    async waitForDisplayed(timeout){
        Logger.logDebug(`Waiting for ${this.name} to be displayed.`)
        let element = await this.getElement();
        try{
            await element.waitForDisplayed({timeout});
            return true;
        }catch(e){
             return false;   
        }  
    }

    async waitForEnabled(timeout){
        Logger.logDebug(`Waiting for ${this.name} to be enabled.`)
        let element = await this.getElement();
        try{
            await element.waitForEnabled({timeout});
            return true;
        }catch(e){
             return false;   
        }  
    }

    async isDisplayed(timeout) {
        Logger.logDebug(`Checking if ${this.name} is displayed or not.`);
        const isElementDisplayed = await this.waitForDisplayed(timeout);
        Logger.logDebug(`${this.name} is ${isElementDisplayed ? 'displayed' : 'not displayed'}.`);
        return isElementDisplayed;
    }

    // async isDisplayed(timeout){
    //     Logger.logDebug(`Checkin if ${this.name} is displayed or not.`)
    //     return this.waitForDisplayed(timeout);
    // }

    async isEnabled(timeout) {
        Logger.logDebug(`Checking if ${this.name} is enabled or not.`);
        const isEnabledResult = await this.waitForEnabled(timeout);
        Logger.logDebug(`${this.name} is ${isEnabledResult ? 'enabled' : 'not enabled'}.`);
        return isEnabledResult;
    }

    // async isEnabled(timeout){
    //     Logger.logDebug(`Checkin if ${this.name} is enabled or not.`)
    //     return this.waitForEnabled(timeout);
    // }
    
    async click() {
        Logger.logDebug(`Clicking on ${this.name} element .`)
        const element = await this.getElement();
        await element.waitForClickable();
        await element.click();
    }

    async getValue() {
        Logger.logDebug(`Getting the value of ${this.name}.`);
        const element = await this.getElement();
        const value = await element.getValue();
        Logger.logDebug(`Value of ${this.name} is: ${value}.`);
        return value;
    }

    // async getValue() {
    //     Logger.logDebug(`Getting the value of ${this.name}.`)
    //     const element = await this.getElement();
    //     return element.getValue();
    // }

    async getCSSProperty(property){
        Logger.logDebug(`Getting the CSSProperty of ${this.name}.`)
        const element = await this.getElement();
        return element.getCSSProperty(property)
    }

    async getBackgroundColor(){
        Logger.logDebug(`Getting the background color of ${this.name}.`)
        return this.getCSSProperty('background-color');
    }

    async getAttribute(attribute){
        Logger.logDebug(`Getting the attribute "${attribute}" of ${this.name}.`);
        const element = await this.getElement();
        const result = await element.getAttribute(attribute);
        Logger.logDebug(`Attribute "${attribute}" of ${this.name} is: ${result}.`);
        return result;
    }

    // async getAttribute(attribute){
    //     Logger.logDebug(`Getting the attribute of ${this.name}.`)
    //     const element = await this.getElement();
    //     return element.getAttribute(attribute);
    // }

    async getText() {
        Logger.logDebug(`Getting the text of ${this.name}.`);
        const element = await this.getElement();
        const text = await element.getText();
        Logger.logDebug(`Text of ${this.name} is: ${text}.`);
        return text;
    }

    // async getText() {
    //     Logger.logDebug(`Getting the text of ${this.name}.`)
    //     const element = await this.getElement();
    //     return element.getText();
    // }
}
export default BaseElement;