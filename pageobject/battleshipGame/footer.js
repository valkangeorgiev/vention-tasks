import BaseForm from "../../framework/BaseForm.js";
import Dropdown from "../../framework/elements/Dropdown.js";
import Label from "../../framework/elements/Label.js";

class Footer extends BaseForm {

    constructor() {
        super('//h1[@class="logo"]', 'Page Logo')
        this.languageDropdown = new Dropdown('//a[contains(text(),"中文")]', 'Language dropdown selector.');
        this.englishLink = new Label('a[title="English"]','Langugage to English link.' )
        
    }
    
    async clickLanguageDropdown() {
        await this.languageDropdown.click();
    }

    async selectLanguageToEnglish() {
        await this.clickLanguageDropdown();
        await this.englishLink.click();
    }



}

export default new Footer;