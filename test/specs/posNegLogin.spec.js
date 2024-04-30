

import LoginPage from '../pageobjects/login.js';

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