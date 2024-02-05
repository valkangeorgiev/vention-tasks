import Logger from "./log/Logger.js";
class Browser {

    async openPage(url) {
        Logger.logDebug(`Opening the page with url = ${url}.`)
        await browser.url(url);
    }

    async getTitle() {
        Logger.logDebug(`Getting the title of the page.`)
        const title = await browser.getTitle();
        Logger.logDebug(`The title of the page is ${title}.`)
        return title;
    }

    async getAlertText() {
        Logger.logDebug(`Getting the Alert Text.`)
        const alertText = await browser.getAlertText();
        Logger.logDebug(`The Alert Text is ${alertText}.`)
        return alertText;
    }

    async acceptAlert() {
        Logger.logDebug(`Accepting the Alert Text.`)
        await browser.acceptAlert()
    }

    async sendAlertText(text) {
        Logger.logDebug(`Sending ${text} in the Alert Text field.`)
        await browser.sendAlertText(text)
    }

    async getUrl() {
        Logger.logDebug(`Getting the url of the page.`)
        const url = await browser.getUrl();
        Logger.logDebug(`The url of the page is ${url}.`)
        return url;
    }
        
}
export default new Browser();

