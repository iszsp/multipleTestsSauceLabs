import { $ } from '@wdio/globals';
import OpenPage from './page.js';
import AfterLogin from './afterLoginCheck.js'


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

    correctUsername = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];
    incorrectUsername = ['null','undefined','',' ','STANDARD_USER','standarduser'];

    correctPassword = 'secret_sauce';
    incorrectPassword = ['null','undefined','',' ','secretsauce','SECRET_SAUCE'];


    async goodUserPass(runLoop, username, password) {
        if(runLoop == true) {
            for(let i = 0; i < this.correctUsername.length; i++) {
                await this.openWeb();
                await this.user.waitForExist();
                await this.pass.waitForExist();
                await this.user.setValue(this.correctUsername[i]);
                await this.pass.setValue(this.correctPassword);
                await this.loginButton.click();
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
            await this.loginButton.click();
            await AfterLogin.afterPosCheck();
        }
    }
    
    async badUser() {
        for(let i = 0; i < this.incorrectUsername.length; i++) {
            await this.openWeb();
            await this.user.waitForExist();
            await this.pass.waitForExist();
            await this.user.setValue(this.incorrectUsername[i]);
            await this.pass.setValue(this.correctPassword);
            await this.loginButton.click();
            if(this.incorrectUsername[i] == '') {
                await AfterLogin.missingUser();
            }
            else{
                await AfterLogin.afterNegCheck();
            }
        }
    }

    async badPass() {
        for(let i = 0; i < this.incorrectPassword.length; i++) {
            await this.openWeb();
            await this.user.waitForExist();
            await this.pass.waitForExist();
            await this.user.setValue(this.correctUsername[i]);
            await this.pass.setValue(this.incorrectPassword[i]);
            await this.loginButton.click();
            if(this.incorrectPassword[i] == '') {
                await AfterLogin.missingPass();
            }
            else if(this.incorrectPassword[i] == '' & this.incorrectUsername[i] == '') {
                await AfterLogin.missingUser();
            }
            else{
                await AfterLogin.afterNegCheck();
            }
        }
    }

}

export default new LoginPage();
