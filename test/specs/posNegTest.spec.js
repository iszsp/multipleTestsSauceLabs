import LoginPage from '../pageobjects/login.js';
import AfterLogin from '../pageobjects/afterLogin.js';



let correctUsername = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];
let incorrectUsername = ['null','undefined','',' ','STANDARD_USER','standarduser'];

let correctPassword = 'secret_sauce';
let incorrectPassword = ['null','undefined','',' ','secretsauce','SECRET_SAUCE'];


module.exports = { correctUsername, incorrectUsername, correctPassword, incorrectPassword };
describe('simple positive and negative test made on my own', () => {
    it('happy test', async () => {
        
        await LoginPage.openWeb();
        await LoginPage.goodUserPass(correctUsername,correctPassword);
    });
    it('sad badUser test', async () => {
        
        await LoginPage.openWeb();
        await LoginPage.badUserPass(incorrectUsername,'secret_sauce');
    });
    it('sad badPass test', async () => {
        
        await LoginPage.openWeb();
        await LoginPage.badPass('standard_user',incorrectPassword);
    });
    it('after login check', async () => {
        AfterLogin.afterPosCheck();
    });

});
