import SwitchTab from "../pageobjects/switchTab.page.js";

describe("Switch to another browser Tab", () => {
    it("Should be able to switch to another tab", async () => {
        await SwitchTab.open();
        await SwitchTab.clickOnClickHere();
        await SwitchTab.switchToNewTab();
        await SwitchTab.switchToNewTab();
    });
});
