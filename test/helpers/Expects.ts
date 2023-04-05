// You can use this class from any test or page within the framework

class Expect {
    static async toHaveTextContaining(
        element: WebdriverIO.Element,
        expectedText: string
    ) {
        await expect(element).toHaveTextContaining(expectedText);
    }
}

export default Expect;
