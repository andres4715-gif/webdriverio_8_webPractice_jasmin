import Page from "./page.js";
import Expect from "../helpers/expects.js";
import Utils from "../helpers/utils.js";

class DropDown extends Page {
    /**
     * define elements
     */
    get dropDownList() {
        return $("#dropdown");
    }

    get descriptionPage() {
        return $("#content > div > h3");
    }

    /**
     * define or overwrite page methods
     */
    open() {
        return super.open("dropdown");
    }

    async chooseAnyOptionFromDropDown(value: string) {
        await Utils.dropdown(await this.dropDownList, value, "DropDown List");
    }

    async checkDropDownPageName(expectedPage: string) {
        await Expect.toHaveEqualText(
            await this.descriptionPage,
            "DropDown title page",
            expectedPage
        );
    }
}

export default new DropDown();
