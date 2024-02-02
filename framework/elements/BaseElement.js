import Logger from "../log/Logger.js";

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
        Logger.logDebug(`Checking if ${this.name} is displayed.`);
        const isElementDisplayed = await this.waitForDisplayed(timeout);
        Logger.logDebug(`${this.name} is ${isElementDisplayed ? 'displayed' : 'not displayed'}.`);
        return isElementDisplayed;
    }

    async isEnabled(timeout) {
        Logger.logDebug(`Checking if ${this.name} is enabled.`);
        const isElementEnabled = await this.waitForEnabled(timeout);
        Logger.logDebug(`${this.name} is ${isElementEnabled ? 'enabled' : 'not enabled'}.`);
        return isElementEnabled;
    }
    
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

    async getCSSProperty(property){
        Logger.logDebug(`Getting the CSSProperty ${property} of ${this.name}.`)
        const element = await this.getElement();
        return element.getCSSProperty(property)
    }

    async getBackgroundColor(){
        return this.getCSSProperty('background-color');
    }

    async getAttribute(attribute){
        Logger.logDebug(`Getting the attribute "${attribute}" of ${this.name}.`);
        const element = await this.getElement();
        const result = await element.getAttribute(attribute);
        Logger.logDebug(`Attribute "${attribute}" of ${this.name} is: ${result}.`);
        return result;
    }

    async getText() {
        Logger.logDebug(`Getting the text of ${this.name}.`);
        const element = await this.getElement();
        const text = await element.getText();
        Logger.logDebug(`Text of ${this.name} is: ${text}.`);
        return text;
    }
}
export default BaseElement;