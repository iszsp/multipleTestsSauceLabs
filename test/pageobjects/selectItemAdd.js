import { $$ } from '@wdio/globals';
import { $ } from '@wdio/globals';
import OpenPage from './page.js';

class ItemAdd extends OpenPage{
    get viewCart() {
        return $('.shopping_cart_link')
    }
    get verifyAfterGood() {
        return $('//*[contains(text(),"Your Cart")]')
    }
    get verifyAfterBad() {
        return $('//*[contains(text(),"fasdkljhgfhasdlfkj")]')
    }

    addToCarty = async () => {
        return await $$('//*[contains(text(),"Add to cart")]')
    }

    removeFromCarty = async () => {
        return await $$('//*[contains(text(),"Remove")]')
    }



    async posAddAllToBag() {

        let addToCartButtons = await this.addToCarty();
        
        await addToCartButtons[0].waitForExist({ timeout: 250 });

        for(let i = 0; i < addToCartButtons.length; i++) {
            addToCartButtons[i].click();
        }
        this.viewCart.click();

        let removeFromCartButtons = await this.removeFromCarty();

        if(removeFromCartButtons.length == addToCartButtons.length) {
            this.verifyAfterGood.waitForExist({ timeout: 250 });
        }
        else {
            this.verifyAfterBad.waitForExist({ timeout: 250 });
        }

    }
    async negAddAllToBag() {

        let addToCartButtons = await this.addToCarty();

        // await addToCartButtons[0].waitForExist({ timeout: 250 });

        const initItems = await addToCartButtons.length
        for(let i = 0; i < 10; i++) {

            for(let i = 0; i < addToCartButtons.length; i++) {
                await addToCartButtons[i].click();
                await browser.pause(500);
                }
            
            let removeFromCartButtons = await this.removeFromCarty();
            
            for(let i = 0; i < removeFromCartButtons.length; i++) {
                await removeFromCartButtons[i].click();
                await browser.pause(500);
                }
        }
        addToCartButtons = this.addToCarty.length
        if(addToCartButtons != initItems) {
            await this.verifyAfterBad.waitForExist({ timeout: 250 });
        }

    }
}

export default new ItemAdd();