import LoginPage from './login.js';

class Logoutting {

    get burger() {
        return $('#react-burger-menu-btn');
    }
    get logout() {
        return $('#logout_sidebar_link');
    }
    get badAttempt() {
        return $('//*[contains(text(), "when you are logged in")]');
    }

    async happyLogout() {
        await LoginPage.goodUserPass(false, 'standard_user','secret_sauce');
        await this.burger.waitForExist({ timeout: 250 });
        await this.burger.click();
        //await browser.pause(1000);
        await this.logout.waitForStable({});
        await this.logout.click();
        //await browser.pause(1000);
        await LoginPage.user.waitForExist({ timeout: 250 });
    }
    async cartLinkLck() {
        await LoginPage.goodUserPass(false, 'standard_user','secret_sauce');
        await this.burger.waitForExist({ timeout: 250 });
        await this.burger.click();
        //await browser.pause(1000);
        await this.logout.waitForStable({});
        await this.logout.click();
        //await browser.pause(1000);
        await LoginPage.user.waitForExist({ timeout: 250 });
        await LoginPage.openWebCust('cart.html')
        //await browser.pause(1000);
        await this.badAttempt.waitForExist({ timeout: 250 });
    }
}

export default new Logoutting();