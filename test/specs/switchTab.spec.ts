import SwitchTab from "../pageobjects/switchTab.page.js";

describe("Switch to another browser Tab", () => {
    it("should be able to swithc to another tab", async () => {
        await SwitchTab.open();
        await SwitchTab.clickOnClickHere();
        await SwitchTab.switchToNewTab();
        await SwitchTab.switchToNewTab();
        await driver.pause(2000);
    });
});
