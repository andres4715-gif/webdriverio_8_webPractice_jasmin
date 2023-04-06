import Page from "./page.js";
import Expect from "../helpers/expects.js";
import Utils from "../helpers/utils.js";

class Shadow extends Page {
    /**
     * define elements
     */

    // ! this is the component within the shadow element
    get shadowHost() {
        return $(
            "#content > my-paragraph:nth-child(5)"
        ) as unknown as WebdriverIO.Element;
    }

    // ! This is the element to interact within the shadow element
    get shadowText() {
        return $("[slot='my-text'] > li:nth-child(1)");
    }

    /**
     * define or overwrite page methods
     */
    open() {
        return super.open("shadowdom");
    }

    async getTextFromShadow() {
        const paragraph = await this.shadowHost.$(await this.shadowText);
        const text = await paragraph.getText();
        console.log(">>>>>" + text);
    }
}

export default new Shadow();
