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


// NOTE! when running both these tests in one session,
// the runLength = false needs to run first!
    async AddAllToBag(runLength) {
        
        let removeFromCartButtons = await this.removeFromCarty();
        let addToCartButtons = (await this.addToCarty());
        await console.log(removeFromCartButtons.length + " remove why won't this work");
        if(removeFromCartButtons.length > 0) {
            await removeFromCartButtons[0].click();
            await console.log("removed 1 from cart?");
            //await browser.pause(500);
        }
        const initAddBtn = (await this.addToCarty()).length; //this is used for an alt test
        await console.log(addToCartButtons.length + " add why won't this work");
        await (addToCartButtons[0]).waitForExist({ timeout: 1000 });
        await console.log(addToCartButtons[0] + " cheese is NOT fire");

        if (runLength == true) {
            addToCartButtons = (await this.addToCarty());
            await console.log('running short test');
            for(let i = 0; i < addToCartButtons.length; i++) {
                await addToCartButtons[i].click();
            }
            await this.viewCart.click();
        
            removeFromCartButtons = await this.removeFromCarty();

            if(removeFromCartButtons.length == addToCartButtons.length) {
                await this.verifyAfterGood.waitForExist({ timeout: 250 });
            }
            else {
                await console.log("does" + removeFromCartButtons.length + " = " + addToCartButtons.length + "?");
                await this.verifyAfterBad.waitForExist({ timeout: 250 });
            }
        }
        else if (runLength == false) {
            await console.log('running longer test');
            if(addToCartButtons.length > 0) {
                for(let i = 0; i < 20; i++) {
                    let removeFromCartButtons = (await this.removeFromCarty());
                    await console.log("there are " + removeFromCartButtons.length + " remove btns")
                    if(removeFromCartButtons.length > 0) {
                            await removeFromCartButtons[0].click();
                            await console.log("removed 1 from cart?");
                            //await browser.pause(500);
                    }
                    await (addToCartButtons[0]).click(); 
                    //await browser.pause(500);
                }
                await this.viewCart.click();
                await console.log('checking if 1 item is added');
                const crtAddBtn = (await this.removeFromCarty()).length
                if(crtAddBtn != 1) {
                    await console.log(crtAddBtn + 'this should be 1');
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

/* // NOTE! this is another laternate version of the
// runLength = false test
else if (runLength == false) {
            await console.log('running longer test');
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
*/


    /* //   NOTE! this is an alt version that's kinda weird
    // for some reason this doesnt work when the one above exists.
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
