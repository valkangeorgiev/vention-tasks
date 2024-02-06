import BaseForm from "../../framework/BaseForm.js";
import Button from "../../framework/elements/Button.js";
import Label from "../../framework/elements/Label.js";
import CheckBox from "../../framework/elements/CheckBox.js";

class SettingsLine extends BaseForm {

    constructor() {
        super('#//dt[@class="settings-label"]', 'Settings label')
        this.markVerifiedEmptyCellsCheckbox = new CheckBox('#setting__shoothint', 'Mark verified empty cells checkbox.');
        this.compactChatCheckBox = new CheckBox('#setting__compactchat', 'Compact chat checkbox.');
        
    }
    
    async getMarkVerifiedEmptyCellsCheckBoxAttribute() {
        return this.markVerifiedEmptyCellsCheckbox.getAttribute('checked');
    }

    async getCompactChatCheckBoxAttribute() {
        return this.markVerifiedEmptyCellsCheckbox.getAttribute('checked');
    }
}

export default new SettingsLine;