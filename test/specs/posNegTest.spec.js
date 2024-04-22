

import LoginPage from '../pageobjects/login.js';

let correctUsername = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];
let incorrectUsername = ['null','undefined','',' ','STANDARD_USER','standarduser'];

let correctPassword = 'secret_sauce';
let incorrectPassword = ['null','undefined','',' ','secretsauce','SECRET_SAUCE'];


export { correctUsername, incorrectUsername, correctPassword, incorrectPassword };

describe('simple positive and negative test made on my own', () => {
    it('happy test', async () => {
        await LoginPage.goodUserPass(true);
    });
    it('sad badUser test', async () => {
        await LoginPage.badUser();
    });
    it('sad badPass test', async () => {
        await LoginPage.badPass();
    });


});
