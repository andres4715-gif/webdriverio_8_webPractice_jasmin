// You can use this class from any test or page within the framework

class Expect {
    static async toHaveTextContaining(
        element: WebdriverIO.Element,
        expectedText: string
    ) {
        await expect(element).toHaveTextContaining(expectedText);
    }

    static async toBeDisplayed(element: WebdriverIO.Element) {
        await expect(element).toBeDisplayed();
    }

    static async not_toBeDisplayed(element: WebdriverIO.Element) {
        await expect(element).not.toBeDisplayed();
    }

    static async toBePresent(element: WebdriverIO.Element) {
        await expect(element).toBePresent();
    }

    static async not_toBePresent(element: WebdriverIO.Element) {
        await expect(element).not.toBePresent();
    }
}

export default Expect;
