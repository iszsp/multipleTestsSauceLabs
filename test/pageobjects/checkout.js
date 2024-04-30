import ItemAdd from './selectItemAdd.js';
// import { expect } from '@wdio/globals';

class Checkout{

    get checkoutBtn() {
        return $('#checkout');
    }
    get firstName() {
        return $('#first-name')
    }
    get lastName() {
        return $('#last-name')
    }
    get zipCode() {
        return $('#postal-code')
    }
    get contBtn() {
        return $('#continue');
    }
    get detPage() {
        return $('//*[contains(text(),"Payment Information:")]');
    }
    get finish() {
        return $('#finish');
    }
    get endPageBtn() {
        return $('#back-to-products');
    }
    get products() {
        return $('//*[contains(text(),"Products")]')
    }


    async allItemsBuy() {
        let rmvFromCart = (await ItemAdd.removeFromCarty());
        await ItemAdd.addAllToBag(true);
        await this.checkoutBtn.waitForExist({ timeout: 250 });
        await this.checkoutBtn.click();
        await this.firstName.waitForExist({ timeout: 250 });
        await this.firstName.setValue('Bo');
        await this.lastName.setValue('Jills');
        await this.zipCode.setValue('84057');
        // await browser.pause(1000);
        await this.contBtn.waitForExist({ timeout: 250});
        await this.contBtn.click();
        // await browser.pause(1000);
        await this.detPage.waitForExist({ timeout: 250 });
        await this.finish.click();
        // await browser.pause(1000);
        await this.endPageBtn.waitForExist({ timeout: 250 });
        await this.endPageBtn.click();
        // await browser.pause(1000);
        await this.products.waitForExist({ timeout: 250 });
        if(await rmvFromCart.length != 0) {
            throw new Error('the cart was not cleared after purchasing items');
        }
    }
    async noItemsBuy() {
        let rmvFromCart = (await ItemAdd.removeFromCarty());
        if(rmvFromCart.length != 0) {
            for(let i = 0; i < rmvFromCart.length; i++) {
                await rmvFromCart[i].click();
                // await browser.pause(1000);
            }
        }
        await ItemAdd.viewCart.waitForExist({ timeout: 250 });
        await ItemAdd.viewCart.click();
        // await browser.pause(1000);
        // await console.log((this.checkoutBtn.waitForExist({ timeout: 250 })) + 'what is this?');
        if((await this.checkoutBtn.waitForExist({ timeout: 250 })) == true) {
            throw new Error('users can check out with no items, this is bad');
        }  
    }
}

export default new Checkout();