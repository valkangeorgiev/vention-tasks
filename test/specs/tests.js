import { browser, $ } from '@wdio/globals'
import { assert } from 'chai';
import { log } from 'console';
import { link } from 'fs';
import * as path from 'path'




describe('Test for Task 5', () => {
    it('Context Menu (Validate the text in an alert)', async () => {
        await browser.url(`http://the-internet.herokuapp.com/context_menu`)
        const whiteBox = await $('#hot-spot');
        await whiteBox.moveTo();
        await whiteBox.click({button:'right', skipRelease:true});                            
        const text = await browser.getAlertText();
        await assert.equal(text, 'You selected a context menu');
        await browser.acceptAlert();
    })
    it('Dynamic Controls', async () => {
        await browser.url(`https://the-internet.herokuapp.com/dynamic_controls`);
        await browser.maximizeWindow()

        const checkBox = $('input[type="checkbox"]');
        await assert.exists(checkBox);
        const removeButton = await $('button[onclick="swapCheckbox()"]');
        await removeButton.click();
        await checkBox.waitForDisplayed({ reverse: true });
        assert.isFalse(await checkBox.isDisplayed(),'Checkbox is displayed');           
        
        const inputText = await $('//input[@type="text"]');
        const isEnabled = await inputText.isEnabled();
        assert.equal(isEnabled, false)
        const enableButton = await $('button[onclick="swapInput()"]')
        await enableButton.click()
        await inputText.waitForEnabled()

        const message = await $('#message');
        const messageText = await message.getText()
        assert.equal(messageText, "It's enabled!")

    })
    it('File Upload', async () => {
        const chooseFile = await $('#file-upload');
        const uploadButton = await $('#file-submit');
        const currentDirectory = process.cwd()
        const filePath = path.join(currentDirectory, 'taskfile.txt');
        const remoteFilePath = await browser.uploadFile(filePath);
        await browser.url(`https://the-internet.herokuapp.com/upload`);                 
        await chooseFile.addValue(remoteFilePath);
        await uploadButton.click();
        const fileUploadedText = await (await $('#uploaded-files')).getText();
        assert.equal(fileUploadedText,'taskfile.txt');
    })
    it('Frames', async () => {

        await browser.url(`https://the-internet.herokuapp.com/frames`);
        const iFrameLink = await $('=iFrame');
        await iFrameLink.click();

        const iFrameElement = await $('#mce_0_ifr'); 
        await browser.switchToFrame(iFrameElement)                                     
        const iFrameText = await (await $('#tinymce')).getText(); 
        assert.equal(iFrameText, "Your content goes here.")
     
    })
    it('File Download', async () => {
    
        await browser.url(`https://the-internet.herokuapp.com/download`); 
        const listOfLinks = await $$('//div[@class="example"]/a');
        const linkNames = [];

        for(const link of listOfLinks){
            const name = await link.getText();
            linkNames.push(name);
        }
        const filteredLinks = linkNames.filter(linkName => {
            return linkName.endsWith('.jpg') || linkName.endsWith('.txt') || linkName.endsWith('.png') || linkName.endsWith('.json');
        });

        assert.isTrue(filteredLinks.length>=1)

        const fileToDownload = await $('//a[contains(text(),"MISAMO.jpg")]')
        await fileToDownload.click();
        await browser.pause(3000);
        const currentDirectory = process.cwd()
        const fileExis = path.join(currentDirectory, '../downloads/MISAMO.jpg');

        assert.exists(fileExis)

    })
    

})


