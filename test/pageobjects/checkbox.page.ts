import Page from "./page.js";
import Expect from "../helpers/expects.js";
import Utils from "../helpers/utils.js";

class CheckboxPage extends Page {
    /**
     * define elements
     */
    get firstCheckbox() {
        return $("#checkboxes input:first-Child");
    }

    get lastCheckbox() {
        return $("#checkboxes input:last-Child");
    }

    /**
     * define or overwrite page methods
     */
    open() {
        return super.open("checkboxes");
    }

    async verifyFirstCheckBoxIsNotSelected() {
        await Expect.not_toBeSelected(
            await this.firstCheckbox,
            "firstCheckbox",
            "checkbox"
        );
    }

    async verifyLastCheckBoxIsSelected() {
        await Expect.toBeSelected(
            await this.lastCheckbox,
            "LastCheckbox",
            "checkbox"
        );
    }

    async verifyFirstCheckBoxIsSelected() {
        await Expect.toBeSelected(
            await this.firstCheckbox,
            "FirstCheckbox",
            "checkbox"
        );
    }

    async clickOnFirstCheckbox() {
        await Utils.click(await this.firstCheckbox, "FirstCheckbox");
    }
}

export default new CheckboxPage();
