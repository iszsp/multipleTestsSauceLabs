import { $ } from '@wdio/globals';
import OpenPage from './page.js';

let { correctUsername, incorrectUsername, correctPassword, incorrectPassword } = require('../specs/posNegTest.spec.js')

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

    async goodUserPass() {
        this.setVar();
        await this.user.waitForExist();
        await this.pass.waitForExist();
        await this.user.setValue(correctUsername);
        await this.pass.setValue(correctPassword);
        await this.loginButton.click();
    }
    
    async badUser() {
        for(let i = 0; i < incorrectUsername.length; i++) {
        await this.user.waitForExist();
        await this.pass.waitForExist();
        await this.user.setValue(incorrectUsername[i]);
        await this.pass.setValue(correctPassword);
        await this.loginButton.click();
        }
    }

    async badPass() {
        for(let i = 0; i < incorrectPassword.length; i++) {
        await this.user.waitForExist();
        await this.pass.waitForExist();
        await this.user.setValue(correctUsername);
        await this.pass.setValue(incorrectPassword[i]);
        await this.loginButton.click();
        }
    }

}

export default new LoginPage();
