
class Browser{

    async openPage(url){
        return browser.url(url);
    }
    async closePage(){
        return browser.close();
    }
    async getTitle(){
        return browser.getTitle();
    }
    async getAlertText(){
        return browser.getAlertText();
    }
    async getUrl(){
        return browser.getUrl();
    }
     
}

export default new Browser();
