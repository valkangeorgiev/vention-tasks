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



// //table[@id='table1']/descendant::td[contains(text(), 'jsmith@gmail.com')]/following-sibling::td  ---> The task Xpath for the table.