import CheckboxPage from "../pageobjects/checkbox.page.js";

describe("checkboxes", () => {
    it("checkbox 2 should be enabled", async () => {
        await CheckboxPage.open();
        await CheckboxPage.verifyFirstCheckBoxIsNotSelected();
        await CheckboxPage.verifyLastCheckBoxIsSelected();
    });

    it("checkbox 1 should be enabled after clicking on it", async () => {
        await CheckboxPage.open();
        await CheckboxPage.verifyFirstCheckBoxIsNotSelected();
        await CheckboxPage.clickOnFirstCheckbox();
        await CheckboxPage.verifyFirstCheckBoxIsSelected();
    });
});
