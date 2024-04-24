import { $$ } from '@wdio/globals';
import { $ } from '@wdio/globals';
import OpenPage from './page.js';

class ItemAdd extends OpenPage{
    get addAllBag() {
        return $$('//*[contains(text(),"Add to cart")]')
    }
    get removeVerifyAllBag() {
        return $$('//*[contains(text(),"Remove")]')
    }
    get viewCart() {
        return $('.shopping_cart_link')
    }
    // get verifyAddBag() {
    //     return $('//*[contains(text(),"Sauce Labs Backpack")]')
    // }
    get verifyAfterGood() {
        return $('//*[contains(text(),"Your Cart")]')
    }
    get verifyAfterBad() {
        return $('//*[contains(text(),"fasdkljhgfhasdlfkj")]')
    }
    async posAddAllToBag() {
        await this.addAllBag[0].waitForExist({ timeout: 250 });
        await browser.pause(3000);
        for(let i = 0; i < this.addAllBag.length; i++) {
            this.addAllBag[i].click();
            await browser.pause(3000);
        }
        this.viewCart.click();
        await browser.pause(500);
        if(this.removeVerifyAllBag.length == this.addAllBag.length) {
            this.verifyAfterGood.waitForExist({ timeout: 250 });
        }
        else {
            this.verifyAfterBad.waitForExist({ timeout: 250 });
        }
    }
    async negAddAllToBag() {
        await this.addAllBag[0].waitForExist({ timeout: 250 });
        const initItems = await this.addAllBag.length
        for(let i = 0; i < 100; i++) {
            for(let i = 0; i < this.addAllBag.length; i++) {
                this.addAllBag[i].click();
                await browser.pause(100);
                }
            for(let i = 0; i < this.removeVerifyAllBag.length; i++) {
                this.removeVerifyAllBag[i].click();
                await browser.pause(100);
                }
        }
        await browser.pause(500);
        const curItems = await this.addAllBag.length
        if(curItems != initItems) {
            this.verifyAfterBad.waitForExist({ timeout: 250 });
        }
    }
}

export default new ItemAdd();