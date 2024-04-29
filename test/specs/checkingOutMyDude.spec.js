
import Checkout from '../pageobjects/checkout.js';
import LoginPage from '../pageobjects/login.js';



describe('imma do the checkout thing now', () => {
    it('checkout with no items', async () => {
        await LoginPage.goodUserPass(false, 'standard_user','secret_sauce');
        await Checkout.noItemsBuy();
    })
    it('checkout with all items', async () => {
        await LoginPage.goodUserPass(false, 'standard_user','secret_sauce');
        await Checkout.allItemsBuy();
    })
})