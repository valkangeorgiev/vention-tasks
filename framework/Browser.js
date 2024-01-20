
class Browser{

    async openPage(url){
        return browser.url(url);
    }
    
    async getTitle(){
        return browser.getTitle();
    }

    async getAlertText(){
        return browser.getAlertText();
    }

    async acceptAlert(){
        return browser.acceptAlert()
    }

    async sendAlertText(text){
        return browser.sendAlertText(text)
    }

    async getUrl(){
        return browser.getUrl();
    } 
}
export default new Browser();
