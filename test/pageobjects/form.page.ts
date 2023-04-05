import Page from "./page.js";

class FormPage extends Page {
    /**
     * define elements
     */
    get username() {
        return $("#username");
    }

    get password() {
        return $("#password");
    }

    get submitButton() {
        return $("#login button[type=submit]");
    }

    get flash() {
        return $("#flash");
    }

    /**
     * define or overwrite page methods
     */
    open() {
        return super.open("login");
    }

    async submit() {
        await this.submitButton.click();
    }

    async fillUserName(userName: string) {
        await this.username.setValue(userName);
    }

    async fillPassword(password: string) {
        await this.password.setValue(password);
    }

    async checkFashMessage(obtainedMessage: string) {
        await this.flash.waitForDisplayed();
        await expect(this.flash).toHaveTextContaining(obtainedMessage);
    }
}

export default new FormPage();
