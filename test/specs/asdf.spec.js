
import { $$ } from '@wdio/globals';
import { browser } from '@wdio/globals';
import LoginPage from '../pageobjects/login.js';
// describe('', async () => {
//     await browser.url('https://www.dell.com');
//     await $('//a[contains(text(),"View All Laptops")]').click();
//     await browser.pause(2000);
// })


let john = async () => {
    return await $$('//*[contains(text(),"Add to cart")]')
}
describe('asdf', () => {
    it('asdfafsd', async () => {
        await LoginPage.goodUserPass(false, 'standard_user','secret_sauce');
        await $('//*[contains(text(),"Sauce Labs Backpack")]').waitForExist();
        let addToCartButtons = await john();
        await addToCartButtons[0].click();
        await browser.pause(3000);
    })
});
