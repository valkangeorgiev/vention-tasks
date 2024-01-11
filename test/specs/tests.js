import { assert } from 'chai';
import * as path from 'path';
import * as fs from 'node:fs'


describe('Test for Task 5', () => {
    it('Context Menu (Validate the text in an alert)', async () => {
        await browser.url(`http://the-internet.herokuapp.com/context_menu`)
        const whiteBox = await $('#hot-spot');
        await whiteBox.click({button:'right', skipRelease:true});                            
        const text = await browser.getAlertText();
        assert.equal(text, 'You selected a context menu', 'The text is wrong.');
        await browser.acceptAlert();
    })
    it('Dynamic Controls', async () => {
        await browser.url(`https://the-internet.herokuapp.com/dynamic_controls`);
        await browser.maximizeWindow();
        const checkBox = $('input[type="checkbox"]');
        assert.exists(checkBox);
        const removeButton = await $('//button[contains(text(),"Remove")]');
        await removeButton.click();
        await checkBox.waitForDisplayed({ reverse: true });
        assert.isFalse(await checkBox.isDisplayed(),'Checkbox is displayed');           
        
        const inputText = await $('//input[@type="text"]');
        const isEnabled = await inputText.isEnabled();
        assert.equal(isEnabled, false);
        const enableButton = await $('button[onclick="swapInput()"]');
        await enableButton.click();
        await inputText.waitForEnabled()

        const message = await $('#message');
        const messageText = await message.getText()
        assert.equal(messageText, "It's enabled!",'The message text is wrong.')

    })
    it('File Upload', async () => {
        const chooseFile = await $('#file-upload');
        const uploadButton = await $('#file-submit');
        const currentDirectory = process.cwd()
        const filePath = path.join(currentDirectory, '/taskfile.txt');
        const remoteFilePath = await browser.uploadFile(filePath);
        await browser.url(`https://the-internet.herokuapp.com/upload`);                 
        await chooseFile.addValue(remoteFilePath);
        await uploadButton.click();
        const fileUploadedText = await (await $('#uploaded-files')).getText();
        assert.equal(fileUploadedText,'taskfile.txt', 'You have uploaded wrong file.');
    })
    it('Frames', async () => {
        await browser.url(`https://the-internet.herokuapp.com/frames`);
        const iFrameLink = await $('=iFrame');
        await iFrameLink.click();

        const iFrameElement = await $('#mce_0_ifr'); 
        await browser.switchToFrame(iFrameElement)                                     
        const iFrameText = await (await $('//p')).getText(); 
        assert.equal(iFrameText, 'Your content goes here.', 'The text is not correct.') 
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
        assert.isTrue(filteredLinks.length>=1,'The array has zero elements.')

        const randomIndex = Math.floor(Math.random() * filteredLinks.length);
        const fileName = filteredLinks[randomIndex];
        const fileToDownload = await $(`//a[contains(text(),'${fileName}')]`);
        await fileToDownload.click();

        await browser.waitUntil(async function() {               
            const currentDirectory = process.cwd()
            const filePath = path.join(currentDirectory, `downloads/${fileName}`);
            const fileExist = fs.existsSync(filePath);
            return fileExist;     
         }, {
             timeout: 5000,
             timeoutMsg: 'File is not downloaded.'
         })
          
         const currentDirectory = process.cwd()
         const filePath = path.join(currentDirectory, `downloads/${fileName}`);

         assert.equal(fs.existsSync(filePath), true,'File with this path does not exist.')
    }) 
})


