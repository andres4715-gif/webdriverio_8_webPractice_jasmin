import Page from "./page.js";
import Utils from "../helpers/utils.js";

class Iframe extends Page {
    /**
     * define elements
     */
    get iframeId() {
        return $("#mce_0_ifr");
    }

    get iframeElement() {
        return $("body[contenteditable=true]");
    }

    /**
     * define or overwrite page methods
     */
    open() {
        return super.open("iframe");
    }

    async iframeInputText(text: string) {
        await Utils.addTextToiFrame(
            await this.iframeId,
            await this.iframeElement,
            text
        );
    }
}

export default new Iframe();
