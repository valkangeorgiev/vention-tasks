import Logger from "./log/Logger.js";
class Browser {

    async openPage(url) {
        Logger.logDebug(`Opening the page.`)
        await browser.url(url);
    }

    async getTitle() {
        Logger.logDebug(`Getting the title of the page.`)
        return browser.getTitle();
    }

    async getAlertText() {
        Logger.logDebug(`Getting the Alert Text.`)
        return browser.getAlertText();
    }

    async acceptAlert() {
        Logger.logDebug(`Accepting the Alert Text.`)
        await browser.acceptAlert()
    }

    async sendAlertText(text) {
        Logger.logDebug(`Sending text in the Alert Text field.`)
        await browser.sendAlertText(text)
    }

    async getUrl() {
        Logger.logDebug(`Getting the url of the page.`)
        return browser.getUrl();
    }
}
export default new Browser();

