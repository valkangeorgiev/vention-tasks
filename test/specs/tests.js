import { browser, $ } from '@wdio/globals'
import { assert } from 'chai';
//import { path } from 'node:path'


describe('Test for Task 5', () => {
    it('Context Menu (Validate the text in an alert)', async () => {
        // await browser.url(`http://the-internet.herokuapp.com/context_menu`)
        // const whiteBox = await $('#hot-spot');
        // await whiteBox.moveTo();
        // await whiteBox.click({button:'right'});
        // const text = await browser.getAlertText();
        // await assert.equal(text, 'You selected a context menu');
        // await browser.acceptAlert();
       
     
    })
    it('Dynamic Controls', async () => {
        // await browser.url(`https://the-internet.herokuapp.com/dynamic_controls`);
        // await browser.maximizeWindow()
    
        // // const checkBox = await $('input[type="checkbox"]');
        // // await assert.exists(checkBox);
        // // const removeButton = await $('button[onclick="swapCheckbox()"]');
        // // await removeButton.click();
        // // await checkBox.waitForDisplayed({ reverse: true });
        // // assert checkbox
        // const inputText = await $('//input[@type="text"]');
        // const isEnabled = await inputText.isEnabled();
        // assert.equal(isEnabled, false)
        // const enableButton = await $('button[onclick="swapInput()"]')
        // await enableButton.click()
        // await inputText.waitForEnabled()

        // //
        // const message = await $('#message');
        // const messageText = await message.getText()

        // assert.equal(messageText, "It's enabled!")

    })
    it('File Upload', async () => {
        // const chooseFile = await $('#file-upload');
        // const uploadButton = await $('#file-submit');
        // const filePath = path.join(__dirname,'../taskfile.txt'); 
        // const remoteFilePath = browser.uploadFile(filePath);
        // await browser.url(`https://the-internet.herokuapp.com/upload`);
        // await chooseFile.setValue(remoteFilePath);
        // await uploadButton.click();
        // const fileUploadedText = await $('#uploaded-files') 
        // const text = await fileUploadedText.waitUntil(fileUploadedText.getText());
        // assert.equal(text,'taskfile.txt')
     
    })
    it('Frames', async () => {

        // await browser.url(`https://the-internet.herokuapp.com/frames`);
        // const iFrameLink = await $('=iFrame');
        // await iFrameLink.click();

        //  await browser.switchToFrame($('#mce_0_ifr'))
        //  const iFrameText = (await $('#tinymce')).getText();
        //  assert.equal(iFrameText, 'Your content goes here.')
    
     
    })
    it('File Download', async () => {

    
     
    })
    

})


