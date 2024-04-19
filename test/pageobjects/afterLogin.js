import { $ } from '@wdio/globals';
import OpenPage from './page.js';
import { expect } from '@wdio/globals';

class AfterLogin extends OpenPage {

    get products() {
       return $('.title')
    }
    get wrongCred() {
        return $('//*[contains(text(), "do not match")]')
    }

    afterPosCheck() {
        expect(this.products).toExist();
    }

    afterNegCheck() {
        expect(this.wrongCred).toExist();
    }
    
}

export default new AfterLogin();