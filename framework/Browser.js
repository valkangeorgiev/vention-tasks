import Logger from "./log/Logger.js";
class Browser {

    async openPage(url) {
        Logger.logDebug(`Opening the page with url = ${url}.`)
        await browser.url(url);
    }

    async getTitle() {
        Logger.logDebug(`Getting the ${title} of the page.`)
        const title = await browser.getTitle();
        return title;
    }

    async getAlertText() {
        Logger.logDebug(`Getting the Alert Text which is ${alertText}.`)
        const alertText = await browser.getAlertText();
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
        Logger.logDebug(`Getting ${url} of the page.`)
        const url = browser.getUrl();
        return url;
    }
        
}
export default new Browser();

