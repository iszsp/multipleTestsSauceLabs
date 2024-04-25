

import ItemAdd from'../pageobjects/selectItemAdd.js';
import LoginPage from '../pageobjects/login.js';
describe('adding items to cart tests', () => {
    it('positive adding item to cart', async () => {
        await LoginPage.goodUserPass(false, 'standard_user','secret_sauce');
        await ItemAdd.posAddAllToBag();
    });
    it('negative adding item to cart', async () => {
        await LoginPage.goodUserPass(false, 'standard_user','secret_sauce');
        await ItemAdd.negAddAllToBag();
    });
});