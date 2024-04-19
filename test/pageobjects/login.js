import { $ } from '@wdio/globals';
import OpenPage from './page.js';

class LoginPage extends OpenPage{

    get user() {
        return $('#user-name');
    }
    get pass() {
        return $('#password');
    }
    get loginButton() {
        return $('#login-button');
    }

    async login(username, password) {
        await this.user.waitForExist();
        await this.pass.waitForExist();
        await this.user.setValue(username);
        await this.pass.setValue(password);
        await this.loginButton.click();
    }
    
}

export default new LoginPage();
