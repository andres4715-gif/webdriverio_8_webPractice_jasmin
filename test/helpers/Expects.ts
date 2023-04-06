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

    /**
     * Asserts that the provided element has the exact text as expected.
     *
     * @param {WebdriverIO.Element} element - The element to be checked.
     * @param {string} elementName - The name of the element to identify it in the logs.
     * @param {string} exactExpectedText - The expected text to match exactly.
     * @returns {Promise<void>} - A promise that resolves once the assertion is complete.
     * @throws {AssertionError} - If the obtained text does not exactly match the expected text.
     */
    static async toHaveEqualText(
        element: WebdriverIO.Element,
        elementName: string,
        exactExpectedText: string
    ) {
        const obtainedText = (await element.getText()).toString();
        console.log("--- Obtained text: " + obtainedText);
        console.log("--- Expected text: " + exactExpectedText);
        await expect(await exactExpectedText).toEqual(obtainedText);

        console.log(
            `--- The ${elementName}, has this text: ${obtainedText}
            and it is the exact message against this expected text: ${exactExpectedText}.`
        );
    }

    /**
     * Asserts that the provided element is displayed on the page.
     *
     * @param {WebdriverIO.Element} element - The element to be checked.
     * @param {string} elementName - The name of the element to identify it in the logs.
     * @returns {Promise<void>} - A promise that resolves once the assertion is complete.
     * @throws {AssertionError} - If the element is not displayed on the page.
     */
    static async toBeDisplayed(
        element: WebdriverIO.Element,
        elementName: string
    ) {
        await expect(element).toBeDisplayed();
        console.log(
            `--- The ${elementName}, is displayed on the page: ${await element.isDisplayed()}`
        );
    }

    /**
     * Asserts that the provided element is not displayed on the page.
     *
     * @param {WebdriverIO.Element} element - The element to be checked.
     * @param {string} elementName - The name of the element to identify it in the logs.
     * @returns {Promise<void>} - A promise that resolves once the assertion is complete.
     * @throws {AssertionError} - If the element is displayed on the page.
     */
    static async not_toBeDisplayed(
        element: WebdriverIO.Element,
        elementName: string
    ) {
        await expect(element).not.toBeDisplayed();
        console.log(
            `--- The ${elementName}, is displayed on the page: ${await element.isDisplayed()}`
        );
    }

    /**
     * Asserts that the provided element is present in the DOM.
     *
     * @param {WebdriverIO.Element} element - The element to be checked.
     * @param {string} elementName - The name of the element to identify it in the logs.
     * @returns {Promise<void>} - A promise that resolves once the assertion is complete.
     * @throws {AssertionError} - If the element is not present in the DOM.
     */
    static async toBePresent(
        element: WebdriverIO.Element,
        elementName: string
    ) {
        await expect(element).toBePresent();
        console.log(
            `--- The ${elementName}, is present on the page: ${await element.isDisplayed()}`
        );
    }

    /**
     * Asserts that the provided element is not present in the DOM.
     *
     * @param {WebdriverIO.Element} element - The element to be checked.
     * @param {string} elementName - The name of the element to identify it in the logs.
     * @returns {Promise<void>} - A promise that resolves once the assertion is complete.
     * @throws {AssertionError} - If the element is present in the DOM.
     */
    static async not_toBePresent(
        element: WebdriverIO.Element,
        elementName: string
    ) {
        await expect(element).not.toBePresent();
        console.log(
            `--- The ${elementName}, is present on the page: ${await element.isDisplayed()}`
        );
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

    /**
     * Method that checks if a given text fragment is contained within another text.
     *
     * @param {string} obtainedText - The text to be checked if it contains the fragment.
     * @param {string} fragmentText - The text fragment to be checked if it exists in the obtained text.
     * @throws {Error} - Throws an error if the obtained text does not contain the fragment.
     */
    static async obtainedTextContainsExpectedText(
        obtainedText: string,
        fragmentText: string
    ) {
        await expect(obtainedText).toContain(fragmentText);
        console.log(
            `The fragmentText: ${fragmentText}, exist on the obtainedText: ${obtainedText}`
        );
    }
}

export default Expect;
