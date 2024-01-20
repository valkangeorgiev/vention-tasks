import Label from "./elements/Label";


class BaseForm {

    constructor(locator, name) {

        this.locator = locator;
        this.name = name;
    }

    async isFormDisplayed() {
        let isFormDisplayed;
        let labelElement = await new Label(this.locator, this.name);
        try {
            isFormDisplayed = await labelElement.isDisplayed();
        } catch (error) {
            return false;
        }
        return isFormDisplayed;
    }
}
export default BaseForm;