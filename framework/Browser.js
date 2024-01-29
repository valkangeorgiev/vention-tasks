
class Browser {

    async openPage(url) {
        await browser.url(url);
    }

    async getTitle() {
        return browser.getTitle();
    }

    async getAlertText() {
        return browser.getAlertText();
    }

    async acceptAlert() {
        await browser.acceptAlert()
    }

    async sendAlertText(text) {
        await browser.sendAlertText(text)
    }

    async getUrl() {
        return browser.getUrl();
    }
}
export default new Browser();

