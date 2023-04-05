import Page from "./page.js";
import Expect from "../helpers/expects.js";
import Utils from "../helpers/utils.js";

class FormPage extends Page {
    /**
     * define elements
     */
    get userName() {
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
        await Utils.click(await this.submitButton, "Log in");
    }

    async fillUserName(textUserName: string) {
        await Utils.setValue(await this.userName, textUserName, "User Name");
    }

    async fillPassword(textPassword: string) {
        await Utils.setValue(await this.password, textPassword, "Password");
    }

    async checkFlashMessage(expectedMessage: string) {
        await Utils.waitForExist(await this.flash, "Flash message");
        await Expect.toHaveTextContaining(
            await this.flash,
            "Flash Message",
            expectedMessage
        );
    }
}

export default new FormPage();
