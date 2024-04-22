import { $ } from '@wdio/globals';


class AfterLogin {

    get products() {
       return $('.title')
    }
    get wrongCred() {
        return $('//*[contains(text(), "do not match")]')
    }

    async afterPosCheck() {
        await (this.products).waitForExist({ timeout: 250 });
    }

    async afterNegCheck() {
        await (this.wrongCred).waitForExist({ timeout: 250 });
    }
    
}

export default new AfterLogin();