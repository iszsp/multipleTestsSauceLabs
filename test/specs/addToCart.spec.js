
import LoginPage from '../pageobjects/login.js';
import ItemAdd from '../pageobjects/selectItemAdd.js';

let addToCart = () => {
describe('adding items to cart tests', () => {
    it('negative adding item to cart', async () => {
        await LoginPage.goodUserPass(false, 'standard_user','secret_sauce');
        await ItemAdd.addAllToBag(false);
    });
    it('positive adding item to cart', async () => {
        await LoginPage.goodUserPass(false, 'standard_user','secret_sauce');
        await ItemAdd.addAllToBag(true);
    });
});
}
addToCart();
export { addToCart };