import Label from "./elements/Label.js";
import Logger from "./log/Logger.js";
class BaseForm {

    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
    }

    async isFormDisplayed(timeout) {
        let isFormDisplayed;
        let labelElement = new Label(this.locator, this.name);
        try {
            Logger.logDebug(`Waiting the form to be displayed.`)
            isFormDisplayed = await labelElement.isDisplayed(timeout);
        } catch (e) {
            return false;
        }
        return isFormDisplayed;
    }
}
export default BaseForm;
