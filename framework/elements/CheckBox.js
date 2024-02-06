import BaseElement from "./BaseElement.js";
import Logger from "../log/Logger.js";

class CheckBox extends BaseElement{

    constructor(locator, name){
        super (locator, name);
    }

    async isSelected() {
        Logger.logDebug(`Checking if ${this.name} is selected.`);
        const element = await this.getElement();
        const isElementSelected = element.isSelected();
        Logger.logDebug(`${this.name} is ${isElementSelected ? 'selected' : 'not selected'}.`);
        return isElementSelected;
    }


}
export default CheckBox;
