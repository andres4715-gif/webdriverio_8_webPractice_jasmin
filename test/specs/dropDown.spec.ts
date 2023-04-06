import DropDown from "../pageobjects/dropDown.page.js";

describe("DropDown List", () => {
    it("should be able to choose any option from a dropDown", async () => {
        await DropDown.open();
        await DropDown.chooseAnyOptionFromDropDown("Option 1");
        await DropDown.checkDropDownPageName("Dropdown List");
    });
});
