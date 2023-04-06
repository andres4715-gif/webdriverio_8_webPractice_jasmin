import Iframe from "../pageobjects/iframe.page.js";

describe("IFRAME handle", () => {
    it("Should be able to work with iframe", async () => {
        await Iframe.open();
        await Iframe.iframeInputText("Adding something on the iFrame");
    });
});
