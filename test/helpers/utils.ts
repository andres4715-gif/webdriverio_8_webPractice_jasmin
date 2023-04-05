// You can use this class from any test or page within the framework

class Utils {
    /**
     * Performs a click on the provided element.
     *
     * @param {WebdriverIO.Element} element - The element on which the click will be performed.
     * @param {string} elementName - The name of the element to identify it in the logs.
     * @returns {Promise<void>} - A promise that resolves once the click has been performed.
     * @throws {Error} - If the element is not available or cannot be clicked.
     */
    static async click(element: WebdriverIO.Element, elementName: string) {
        await element.waitForDisplayed();
        await element.click();
        console.log(`--- Click on: ${elementName}, Success`);
    }

    /**
     * Waits for the provided element to exist on the page.
     *
     * @param {WebdriverIO.Element} element - The element to wait for.
     * @param {string} elementName - The name of the element to identify it in the logs.
     * @returns {Promise<void>} - A promise that resolves once the element exists on the page.
     * @throws {Error} - If the element does not exist after the default timeout period.
     */
    static async waitForExist(
        element: WebdriverIO.Element,
        elementName: string
    ) {
        await element.waitForExist();
        console.log(
            `--- The ${elementName}, exist on the page: ${await element.isExisting()}`
        );
    }

    /**
     * Sets the value of the provided element to the specified text.
     *
     * @param {WebdriverIO.Element} element - The element whose value will be set.
     * @param {string} addText - The text to set as the element's value.
     * @param {string} elementName - The name of the element to identify it in the logs.
     * @returns {Promise<void>} - A promise that resolves once the value has been set.
     * @throws {Error} - If the element cannot be found or the value cannot be set.
     */
    static async setValue(
        element: WebdriverIO.Element,
        addText: string,
        elementName: string
    ) {
        await element.setValue(addText);
        console.log(
            `--- This Text: ${addText}, was added on the ${elementName} field`
        );
    }
}

export default Utils;
