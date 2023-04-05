import Page from "./page.js";
import Expect from "../helpers/Expects.js";

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
}

export default new DynamicPage();
