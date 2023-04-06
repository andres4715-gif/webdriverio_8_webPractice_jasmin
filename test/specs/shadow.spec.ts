import Shadow from "../pageobjects/shadow.page.js";

describe("Get text within a shadow", () => {
    it("should be able to get text from a shadow", async () => {
        await Shadow.open();
        await Shadow.getTextFromShadow();
        await driver.pause(2000);
    });
});
