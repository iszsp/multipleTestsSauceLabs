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
        return $('//*[contains(text(),"something went wrong alsdkjfhalskdjhfaskldjfh")]')
    }
    get booleanNeeded() {
        return $('//*[contains(text(),"YOU DIDNT PUT A BOOLEAN IN THE PARAMETERS FOR THIS TEST OR YOUR BOOLEAN ISNT SUPPORTED")]')
    }

    addToCarty = async () => {
        return await $$('//*[contains(text(),"Add to cart")]')
    }

    removeFromCarty = async () => {
        return await $$('//*[contains(text(),"Remove")]')
    }



    async AddAllToBag(runLength) {
        let addToCartButtons = (await this.addToCarty());
        const initAddBtn = (await this.addToCarty()).length;

        await (addToCartButtons[0]).waitForExist({ timeout: 1000 });
        await console.log(addToCartButtons[0] + " cheese is NOT fire");

        if (runLength == true) {
            for(let i = 0; i < addToCartButtons.length; i++) {
                await addToCartButtons[i].click();
            }
            await this.viewCart.click();
        
            let removeFromCartButtons = await this.removeFromCarty();

            if(removeFromCartButtons.length == addToCartButtons.length) {
                await this.verifyAfterGood.waitForExist({ timeout: 250 });
            }
            else {
                await this.verifyAfterBad.waitForExist({ timeout: 250 });
            }
        }
        else if (runLength == false) {
            await console.log('running long test');
            if(addToCartButtons.length > 0) {
                for(let i = 0; i < 5; i++) {
    
                    for(let i = 0; i < addToCartButtons.length; i++) {
                        await addToCartButtons[i].click();
                    }
    
                    let removeFromCartButtons = await this.removeFromCarty();
    
                    for(let i = 0; i < removeFromCartButtons.length; i++) {
                        await removeFromCartButtons[i].click();
                    }
                }
                const crtAddBtn = (await this.addToCarty()).length
                await console.log("cheesy " + crtAddBtn + " = " + initAddBtn);
                if(crtAddBtn != initAddBtn) {
                        await this.verifyAfterBad.waitForExist({ timeout: 250 });
                    }
            }
            else {
                await this.verifyAfterBad.waitForExist({ timeout: 250 });
            }
        }
        else {
            await this.booleanNeeded.waitForExist({ timeout: 250 });
        }

    }

    /* //   NOTE! for some reason this doesnt work when the one above exists.
    async negAddAllToBag2() {
        const initAddBtn = (await this.addToCarty()).length;
        let addToCartButtons = (await this.addToCarty());
        await addToCartButtons[0].waitForExist();
        await console.log(initAddBtn[0] + " cheese is fire");
        if(addToCartButtons.length > 0) {
            for(let i = 0; i < 5; i++) {

                for(let i = 0; i < addToCartButtons.length; i++) {
                    await addToCartButtons[i].click();
                }

                let removeFromCartButtons = await this.removeFromCarty();

                for(let i = 0; i < removeFromCartButtons.length; i++) {
                    await removeFromCartButtons[i].click();
                }
            }
            const crtAddBtn = (await this.addToCarty()).length
            await console.log("cheesy " + crtAddBtn + " = " + initAddBtn);
            if(crtAddBtn != initAddBtn) {
                    await this.verifyAfterBad.waitForExist({ timeout: 250 });
                }
        }
        else {
            await this.verifyAfterBad.waitForExist({ timeout: 250 });
        }
    }
*/
}

export default new ItemAdd();
