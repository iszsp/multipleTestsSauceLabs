import { browser } from '@wdio/globals';
import Variables from '../specs/posNegTest.spec.js';

export default class OpenPage extends Variables {

    openWeb() {
    return browser.url('https://www.saucedemo.com/');
    }

}