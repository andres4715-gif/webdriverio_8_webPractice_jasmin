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

    /**
     * Selects a value from a dropdown menu element by visible text.
     *
     * @param {WebdriverIO.Element} element - The dropdown menu element.
     * @param {string} value - The visible text of the option to select.
     * @param {string} elementName - The name of the dropdown menu element.
     *
     * @returns {Promise<void>}
     */
    static async dropdown(
        element: WebdriverIO.Element,
        value: string,
        elementName: string
    ) {
        const dropdown = element;
        await dropdown.selectByVisibleText(value);
        console.log(
            `--- In the ${elementName} was selected this option: ${value}`
        );
    }

    /**
     *This method switches the focus to the next browser tab.
     *It waits until at least two browser tabs are open, and then switches to the second tab.
     *@throws {Error} If there are not enough browser tabs open within the defined timeout.
     *@example
     *await switchBrowserTab();
     */
    static async switchBrowserTab() {
        await browser.waitUntil(
            async () => {
                const windowHandles = await browser.getWindowHandles();
                return windowHandles.length >= 2; // wait at less two windows
            },
            {
                timeout: 10000,
                timeoutMsg: " XXX --- No windows enough",
            }
        ); // Define the limit time to wait

        const windowHandles = await browser.getWindowHandles();
        const newTabHandle = windowHandles[1];
        await browser.switchToWindow(newTabHandle);
        console.log(`--- Switched to next the tab`);
    }

    /**
     * Method that retrieves the shadow text of an element within a shadow DOM component.
     *
     * @param {WebdriverIO.Element} component - The shadow DOM component containing the shadowed element.
     * @param {WebdriverIO.Element} element - The shadowed element whose text is to be retrieved.
     * @returns {Promise<string>} - A promise that resolves to the text of the shadowed element.
     */
    static async shadow(
        component: WebdriverIO.Element,
        element: WebdriverIO.Element
    ) {
        const paragraph = component.$(element);
        const text = await paragraph.getText();
        console.log(`--- The shadow text obtained is: ${text}`);
        return text;
    }

    /**
     * Method that adds text to an input field within an iFrame element.
     *
     * @param {WebdriverIO.Element} component - The iFrame component containing the input field.
     * @param {WebdriverIO.Element} iframeElement - The input field within the iFrame where text is to be added.
     * @param {string} text - The text to be added to the input field.
     */
    static async addTextToiFrame(
        component: WebdriverIO.Element,
        iframeElement: WebdriverIO.Element,
        text: string
    ) {
        const iframe = component;
        await browser.switchToFrame(iframe);
        console.log(`--- Switched to iFrame`);
        const input = iframeElement;
        await iframeElement.clearValue();
        await input.setValue(text);
        await browser.switchToParentFrame();
        console.log(`--- Switched to iFrame`);
    }
}

export default Utils;
