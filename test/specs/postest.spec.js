
import LoginPage from '../pageobjects/login.js';
import AfterLogin from '../pageobjects/afterLogin.js';

describe('simple positive test made on my own', () => {
    it('login', async () => {
        await LoginPage.goodUserPass(false, 'standard_user','secret_sauce');
    });
    it('after login check', async () => {
        AfterLogin.afterPosCheck();
    });

});





/*
const usernames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user']

for (let i = 0; i < 17; i++) { 
    let username = usernames[i];
    let password = 'secret_sauce';
    describe('type in stuff', () => {
        if (i >= 6 & i < 12) {username = `${usernames[i-6]}_`;}
        else if (i >= 12) {username = usernames[i-12];
        password = 'secret_sauces'}
        it('login', async () => {
            browser.url('https://www.saucedemo.com/')
            await $('#user-name').waitForExist()
            await $('#password').waitForExist({ timeout: 250 })
            await $('#user-name').setValue(`${username}`);
            await browser.pause(50)
            await $('#password').setValue(`${password}`);
            await browser.pause(50)
            await $('#login-button').click();
            if (i > 5) {
                await $('.error-message-container').waitForExist({ timeout: 500 });
            }
        });
        if(i != 1 & i < 6) {
        it('should be on secure page', async () => {
            if (await $('[name*="red"]').waitForExist({ timeout: 500 }) == true)
            await browser.pause(50);
            await $('[name*="red"]').scrollIntoView();
            await browser.pause(50);
        });
        }
    });
}
*/