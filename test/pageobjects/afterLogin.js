import { $ } from '@wdio/globals';


class AfterLogin {

    get products() {
       return $('.title')
    }
    get wrongCred() {
        return $('//*[contains(text(), "do not match")]')
    }
    get userMiss() {
        return $('//*[contains(text(), "Username is required")]')
    }
    get passMiss() {
        return $('//*[contains(text(), "Password is required")]')
    }

    async afterPosCheck() {
        await (this.products).waitForExist({ timeout: 250 });
    }

    async afterNegCheck() {
        await (this.wrongCred).waitForExist({ timeout: 250 });
    }
    
    async missingUser() {
        await (this.userMiss).waitForExist({ timeout: 250 });
    }

    async missingPass() {
        await (this.passMiss).waitForExist({ timeout: 250 });
    }
}

export default new AfterLogin();