import { $$ } from '@wdio/globals';
import { $ } from '@wdio/globals';

class itemAdd {
    get addAllBag() {
        return $$('//*[contains(text(),"Add to cart")]')
    }
    get removeVerifyAllBag() {
        return $$('//*[contains(text(),"Remove")]')
    }
    get viewCart() {
        return $('.shopping_cart_link')
    }
    get verifyAddBag() {
        return $('//*[contains(text(),"Sauce Labs Backpack")]')
    }
    get verifyAddBag() {
        return $('//*[contains(text(),"Your Cart")]')
    }
    async posAddAllToBag() {
        this.addAllBag.click();
        this.viewCart.click();
        if(this.removeVerifyAllBag.length == this.addAllBag.length) {
            this.
        }
    }
    async posAddAllToBag() {
        for(let i = 0; i < 50; i++) {
        this.addAllBag.click();
        this.
        }
    }
}