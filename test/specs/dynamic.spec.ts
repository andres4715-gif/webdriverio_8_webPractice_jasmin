import DynamicPage from "../pageobjects/dynamic.page.js";

describe("dynamic loading", () => {
    it("should be an button on the page", async () => {
        await DynamicPage.open();
        await DynamicPage.loadedShouldBeNotDisplayed();
        await DynamicPage.startButtonShouldBeDisplayed();
        await DynamicPage.startButtonToBePresent();
        await DynamicPage.startButtonNotToBePresent();
        await DynamicPage.clickOnStartButton();
        await DynamicPage.waitForLoaded();
        await DynamicPage.verifyLoadedIsPresent();
    });
});
