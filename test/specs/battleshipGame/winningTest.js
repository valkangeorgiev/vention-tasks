import { assert } from 'chai';
import footer from "../../../pageobject/battleshipGame/footer.js";
import Browser from '../../../framework/Browser.js';
import Logger from '../../../framework/log/Logger.js';
import Waits from '../../../framework/Waits.js';
import settingsLine from '../../../pageobject/battleshipGame/settingsLine.js';
const waits = new Waits();



describe('Test case 1', () => {
    it('Swag Labs text, username field, password field, login button and credentiial info block should be present', async () => {
        Logger.logStep(1,'Open page https://battleship-game.org/zh ');
        await Browser.openPage('https://battleship-game.org/zh');

        await footer.selectLanguageToEnglish();
        

        const pageTitle = await Browser.getTitle();
        assert.equal(pageTitle, 'Battleship (free online game for two players)','The title of the page is different');



    })
})