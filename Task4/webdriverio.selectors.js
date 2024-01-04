import {browser, expect, $} from '@wdio/globals';

describe('Test different locators', () => {
    it('ID Attribute', async () => {  
        const radioButton = await $('#polloption483');  
    });
    it('Name Attribute',async () => {
        const startDateField = await $('[name= "start_date"]');
    });
    it('Tag Name', async () => {
        const text = await $('<small />');
    });
    it('Link Text', async () => {
        const voteiLinkText = await $('=Гласувай');
    });
    it('Particial Link Text', async () => {
        const generalTermsParticialLinkText = await $('*=условия');
    });
    it('CSS Selector', async () => {
        const monthCssSelector = await $('select[name="month"]');
    });
    it('Xpath', async () => {
        const yearXpath = await $('//select[@name="year"]');
    });
});




//table[@id='table1']//tr//td[text()='jsmith@gmail.com']//parent::tr//td//ancestor::table[@id='table1']//thead//th/*[text() = 'Due']//ancestor::table//thead//ancestor::table//tbody//tr//td[4] - NEW ONE!

////table[@id='table1']//tr//td[text()='jsmith@gmail.com']//parent::tr//td[position() = 4] - NEW TRY!