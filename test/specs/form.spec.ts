import FormPage from "../pageobjects/form.page.js";

describe("auth form", () => {
    it("should deny access with wrong creds", async () => {
        await FormPage.open();
        await FormPage.fillUserName("jhon doe");
        await FormPage.fillPassword("bar");
        await FormPage.submit();
        await FormPage.checkFashMessage("Your username is invalid!");
    });

    it("should allow access with correct creds", async () => {
        await FormPage.open();
        await FormPage.fillUserName("tomsmith");
        await FormPage.fillPassword("SuperSecretPassword!");
        await FormPage.submit();
        await FormPage.checkFashMessage("You logged into a secure area!");
    });
});
