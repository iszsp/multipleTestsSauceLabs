import { browser } from '@wdio/globals';


export default class OpenPage {

    openWeb() {
    return browser.url(`https://www.saucedemo.com/`);
    }
    openWebCust(path) {
        return browser.url(`https://www.saucedemo.com/${path}`);
        }
}