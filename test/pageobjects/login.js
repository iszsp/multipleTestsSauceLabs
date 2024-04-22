import { $ } from '@wdio/globals';
import OpenPage from './page.js';
import AfterLogin from './afterLogin.js'
import { correctUsername, incorrectUsername, correctPassword, incorrectPassword } from '../specs/posNegTest.spec.js';


class LoginPage extends OpenPage {

    get user() {
        return $('#user-name');
    }
    get pass() {
        return $('#password');
    }
    get loginButton() {
        return $('#login-button');
    }

    async goodUserPass(runLoop, username, password) {
        if(runLoop == true) {
            for(let i = 0; i < correctUsername.length; i++) {
                await this.openWeb();
                await this.user.waitForExist();
                await this.pass.waitForExist();
                await this.user.setValue(correctUsername[i]);
                await this.pass.setValue(correctPassword);
                await browser.pause(500);
                await this.loginButton.click();
                await browser.pause(500);
                if(i != 1) {
                await AfterLogin.afterPosCheck();
                }
            }
        }
        else if(runLoop == false) {
            await this.openWeb();
            await this.user.waitForExist();
            await this.pass.waitForExist();
            await this.user.setValue(username);
            await this.pass.setValue(password);
            await browser.pause(500);
            await this.loginButton.click();
            await browser.pause(500);
            await AfterLogin.afterPosCheck();
        }
    }
    
    async badUser() {
        for(let i = 0; i < incorrectUsername.length; i++) {
            await this.openWeb();
            await this.user.waitForExist();
            await this.pass.waitForExist();
            await this.user.setValue(incorrectUsername[i]);
            await this.pass.setValue(correctPassword);
            await browser.pause(500);
            await this.loginButton.click();
            await browser.pause(500);
            await AfterLogin.afterNegCheck();
        }
    }

    async badPass() {
        for(let i = 0; i < incorrectPassword.length; i++) {
            await this.openWeb();
            await this.user.waitForExist();
            await this.pass.waitForExist();
            await this.user.setValue(correctUsername[i]);
            await this.pass.setValue(incorrectPassword[i]);
            await browser.pause(500);
            await this.loginButton.click();
            await browser.pause(500);
            await AfterLogin.afterNegCheck();
        }
    }

}

export default new LoginPage();
