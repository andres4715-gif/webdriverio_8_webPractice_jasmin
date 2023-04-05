// You can use this class from any test or page within the framework

class Expect {
    /**
     * Asserts that the provided element's text contains the expected text.
     *
     * @param {WebdriverIO.Element} element - The element to be checked.
     * @param {string} elementName - The name of the element to identify it in the logs.
     * @param {string} expectedText - The text to search for within the element's text.
     * @returns {Promise<void>} - A promise that resolves once the assertion is complete.
     * @throws {AssertionError} - If the element's text does not contain the expected text.
     */
    static async toHaveTextContaining(
        element: WebdriverIO.Element,
        elementName: string,
        expectedText: string
    ) {
        await expect(element).toHaveTextContaining(expectedText);
        console.log(
            `--- The ${elementName}, contains part of this text: ${expectedText}`
        );
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

    /**
     * Asserts that the provided element is not selected.
     * Applicable for checkbox
     *
     * @param {WebdriverIO.Element} element - The element to be checked.
     * @param {string} elementName - The name of the element to identify it in the logs.
     * @param {string} typeElement - The type of element being checked (e.g. "checkbox", "radio button").
     * @returns {Promise<void>} - A promise that resolves once the assertion is complete.
     * @throws {AssertionError} - If the element is selected.
     */
    static async not_toBeSelected(
        element: WebdriverIO.Element,
        elementName: string,
        typeElement: string
    ) {
        await expect(element).not.toBeSelected();
        console.log(`--- The ${typeElement} ${elementName} is not selected`);
    }

    /**
     * Asserts that the provided element is selected.
     * Applicable for checkbox
     *
     * @param {WebdriverIO.Element} element - The element to be checked.
     * @param {string} elementName - The name of the element to identify it in the logs.
     * @param {string} typeElement - The type of element being checked (e.g. "checkbox", "radio button").
     * @returns {Promise<void>} - A promise that resolves once the assertion is complete.
     * @throws {AssertionError} - If the element is not selected.
     */
    static async toBeSelected(
        element: WebdriverIO.Element,
        elementName: string,
        typeElement: string
    ) {
        await expect(element).toBeSelected();
        console.log(`--- The ${typeElement} ${elementName} is selected`);
    }
}

export default Expect;
