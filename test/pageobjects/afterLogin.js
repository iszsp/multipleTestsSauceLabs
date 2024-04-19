import { $ } from '@wdio/globals';
import OpenPage from './page.js';
import { expect } from '@wdio/globals';

class AfterLogin extends OpenPage {

    get products() {
       return $('.title')
    }

    afterCheck() {
    expect(this.products).toExist();
    }
    
}

export default new AfterLogin();