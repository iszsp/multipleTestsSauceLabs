
import LoginPage from '../pageobjects/login.js';
import AfterLogin from '../pageobjects/afterLoginCheck.js';

let pos = () => {
    describe('simple positive test made on my own', () => {
        it('login', async () => {
            await LoginPage.goodUserPass(false, 'standard_user','secret_sauce');
            await browser.pause(500);
        });
        it('after login check', async () => {
            AfterLogin.afterPosCheck();
        });
    });
}
pos();
export { pos };