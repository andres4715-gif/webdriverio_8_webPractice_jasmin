import Page from "./page.js";
import Expect from "../helpers/expects.js";
import Utils from "../helpers/utils.js";

class SwitchTab extends Page {
    /**
     * define elements
     */
    get clickHere() {
        return $("#content > div > a");
    }

    get txtExample() {
        return $(".example > h3");
    }

    /**
     * define or overwrite page methods
     */
    open() {
        return super.open("windows");
    }

    async clickOnClickHere() {
        await Utils.click(await this.clickHere, "Click Link here");
    }

    async switchToNewTab() {
        await Utils.switchBrowserTab();
        await Expect.toHaveEqualText(
            await this.txtExample,
            "label nex tab",
            "New Window"
        );
    }
}

export default new SwitchTab();
