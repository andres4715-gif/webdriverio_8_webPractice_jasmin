import Page from "./page.js";
import Expect from "../helpers/expects.js";
import Utils from "../helpers/utils.js";

class DynamicPage extends Page {
    /**
     * define elements
     */
    get btnStart() {
        return $("button=Start");
    }
    get loadedPage() {
        return $("#finish");
    }

    /**
     * define or overwrite page methods
     */
    open() {
        return super.open("dynamic_loading/2");
    }

    async loadedShouldBeNotDisplayed() {
        await Expect.not_toBeDisplayed(await this.loadedPage);
    }

    async startButtonShouldBeDisplayed() {
        await Expect.toBeDisplayed(await this.btnStart);
    }

    async startButtonToBePresent() {
        await Expect.toBePresent(await this.btnStart);
    }

    async startButtonNotToBePresent() {
        await Expect.not_toBePresent(await this.loadedPage);
    }

    async clickOnStartButton() {
        await Utils.click(await this.btnStart, "Start Button");
    }

    async waitForLoaded() {
        await Utils.waitForExist(await this.loadedPage, "Loaded progress bar");
    }
}

export default new DynamicPage();
