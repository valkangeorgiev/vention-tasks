import { browser, $ } from '@wdio/globals'
import { assert } from 'chai';
import { log } from 'console';
import * as path from 'path'




describe('Test for Task 5', () => {
    it('Context Menu (Validate the text in an alert)', async () => {
        // await browser.url(`http://the-internet.herokuapp.com/context_menu`)
        // const whiteBox = await $('#hot-spot');
        // await whiteBox.moveTo();
        // await whiteBox.click({button:'right', skipRelease:true});                            <-- correct
        // const text = await browser.getAlertText();
        // await assert.equal(text, 'You selected a context menu');
        // await browser.acceptAlert();
    })
    it('Dynamic Controls', async () => {
        // await browser.url(`https://the-internet.herokuapp.com/dynamic_controls`);
        // await browser.maximizeWindow()

        // const checkBox = $('input[type="checkbox"]');
        // await assert.exists(checkBox);
        // const removeButton = await $('button[onclick="swapCheckbox()"]');
        // await removeButton.click();
        // await checkBox.waitForDisplayed({ reverse: true });
        // assert.isFalse(await checkBox.isDisplayed(),'Checkbox is displayed');            <-- correct
        
        // const inputText = await $('//input[@type="text"]');
        // const isEnabled = await inputText.isEnabled();
        // assert.equal(isEnabled, false)
        // const enableButton = await $('button[onclick="swapInput()"]')
        // await enableButton.click()
        // await inputText.waitForEnabled()

        // const message = await $('#message');
        // const messageText = await message.getText()
        // assert.equal(messageText, "It's enabled!")

    })
    it('File Upload', async () => {
        // const chooseFile = await $('#file-upload');
        // const uploadButton = await $('#file-submit');
        // const currentDirectory = process.cwd()
        // const filePath = path.join(currentDirectory, 'taskfile.txt');
        // const remoteFilePath = await browser.uploadFile(filePath);
        // await browser.url(`https://the-internet.herokuapp.com/upload`);                   <-- correct
        // await chooseFile.addValue(remoteFilePath);
        // await uploadButton.click();
        // const fileUploadedText = await (await $('#uploaded-files')).getText();
        // assert.equal(fileUploadedText,'taskfile.txt');
    })
    it('Frames', async () => {

        // await browser.url(`https://the-internet.herokuapp.com/frames`);
        // const iFrameLink = await $('=iFrame');
        // await iFrameLink.click();

        // const iFrameElement = await $('#mce_0_ifr'); 
        // await browser.switchToFrame(iFrameElement)                                         <-- correct
        // const iFrameText = await (await $('#tinymce')).getText(); 
        // assert.equal(iFrameText, 'Your content goes here.')
     
    })
    it.only('File Download', async () => {
        const allowedExtensions = ['jpg', 'txt', 'png', 'json'];

        await browser.url(`https://the-internet.herokuapp.com/download`); 
        let listOfLinks = await $$('//div[@class="example"]/a');

        listOfLinks.
        
       
     
    })
    

})

