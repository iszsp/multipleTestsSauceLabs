
import { $ } from '@wdio/globals';
import { browser } from '@wdio/globals';
describe('', async () => {
    await browser.url('https://www.dell.com');
    await $('//a[contains(text(),"View All Laptops")]').click();
    await browser.pause(2000);
})