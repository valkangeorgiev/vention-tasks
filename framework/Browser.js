
class Browser{

    async openPage(url){
        await browser.url(url);
    }
    
    async getTitle(){
        await browser.getTitle();
    }

    async getAlertText(){
        await browser.getAlertText();
    }

    async acceptAlert(){
        await browser.acceptAlert()
    }

    async sendAlertText(text){
        await browser.sendAlertText(text)
    }

    async getUrl(){
        await browser.getUrl();
    } 
}
export default new Browser();

