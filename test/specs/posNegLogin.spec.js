

import LoginPage from '../pageobjects/login.js';

// const correctUsername = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];
// const incorrectUsername = ['null','undefined','',' ','STANDARD_USER','standarduser'];

// const correctPassword = 'secret_sauce';
// const incorrectPassword = ['null','undefined','',' ','secretsauce','SECRET_SAUCE'];


// export { correctUsername, incorrectUsername, correctPassword, incorrectPassword };
let posNeg = () => {
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
}
posNeg();
export { posNeg };